<template>
  <el-dialog
    v-bind="$attrs"
    :close-on-click-modal="false"
    custom-class="dialog-claim"
    :show-close="false"
    width="90%">
    <template
      #title>
      <dialog-header
        icon="ri-gift-line"
        title="Claim a Sub-Account"
        @close="close">
      </dialog-header>
    </template>
    
    <div
      class="dialog-claim__form"
      v-if="!isLoading && !isDone">
      <el-form
        ref="formRef"
        label-position="top"
        :model="form"
        :rules="rules"
        :show-message="false"
        size="large">
        <el-form-item
          label="Sub-Account"
          prop="id">
          <el-input
            v-model="form.id"
            placeholder="4 to 9 characters(letters and numbers)">
            <template 
              #append>.{{ config.public.DID_PARENT }}
            </template>
          </el-input>
        </el-form-item>
        
        <el-form-item
          label="Your Wallet Address"
          prop="address">
          <el-input
            v-model="form.address"
            placeholder="Ethereum address starts with 0x">
          </el-input>
        </el-form-item>
      </el-form>
      
      <div
        class="dialog-claim__form-footer">
        <el-button
          size="large"
          type="primary"
          @click="claim">
          Claim
        </el-button>

        <a
          class="dialog-claim__tip"
          href="https://app.did.id?inviter=0xecho.bit&channel=0xecho.bit"
          target="_blank">
          <span>
            Manage my .bit accounts
          </span>

          <i class="ri-arrow-right-up-line"></i>
        </a>
      </div>
    </div>
    
    <div
      class="dialog-claim__result"
      v-if="!isLoading && isDone">
      <img
        class="dialog-claim__result-visual" 
        src="@/assets/claim-success.svg" 
        alt="Claim Successfully!">
      
      <p
        class="dialog-claim__result-text">
        {{ form.id  }}.{{ config.public.DID_PARENT }} is ready!
      </p>
      
      <a 
        class="el-button el-button--primary el-button--large dialog-claim__result-button"
        :href="`https://data.did.id/${form.id}.${config.public.DID_PARENT}`"
        target="_blank">
        Manage Records
      </a>
    </div>
  </el-dialog>
</template>

<script setup>
import { ElButton, ElDialog, ElForm, ElFormItem, ElInput, ElLoading, ElMessage } from 'element-plus'

const config = useRuntimeConfig()
console.log('config', config.public)
const parent = config.public.DID_PARENT

const emits = defineEmits([
  'update:modelValue',
  'on-claimed'
])

// form
const formRef = ref(null)
const form = reactive({
  id: '',
  address: ''
})

const rules = reactive({
  id: [{
    required: true, 
    trigger: 'blur',
    validator: (rule, value) =>  {
      if (!value) {
        return false
      }
      if (value.length < 4) {
        return false
      }
      if (value.length > 9) {
        return false
      }
      if (!/^[A-Za-z0-9]*$/.test(value)) {
        return false
      }
      return true
    }
  }],
  address: [{
    required: true, 
    trigger: 'blur',
    validator: (rule, value) => {
      if (!/^0x/.test(value)) {
        return false
      }
      if (value.length !== 42) {
        return false
      }
      return true
    }
  }]
})

let isLoading = ref(false)
let isDone = ref(false)

const close = () => {
  emits('update:modelValue', false)
  form.id = ''
  form.address = ''
  isLoading.value = false
  isDone.value = false
}

let loadingService
const getLoading = (text) => {
  loadingService && loadingService.close()
  loadingService = ElLoading.service({
    target: '.dialog-claim',
    text
  }) 
}

let checkInterval
const startCheck = () => {
  checkInterval = setInterval(async () => {
    const id = form.id + '.' + parent
    const rs =  await $fetch(config.public.API + '/api/v1/modules/subdid/check', {
      params: {
        id,
        minted_by: form.address,
        parent
      }
    })
    if (rs.error === 0) {
      clearInterval(checkInterval)
      isLoading.value = false
      isDone.value = true
      emits('on-claimed', id)
      loadingService.close()
    }
  }, 10000)
}

const claim = async () => {
  try {
    await formRef.value.validate()
    isLoading.value = true
    getLoading('Loading...')
    try {
      const rs = await $fetch(config.public.API + '/api/v1/modules/subdid/claim', {
        params: {
          id: form.id + '.' + parent,
          minted_by: form.address,
          parent
        }
      })
      console.log(rs)
      if (rs.error === 0) {
        getLoading('It takes about 3 mins')
        startCheck()
      } else {
        isLoading.value = false
        loadingService && loadingService.close()
      }
    } catch (e) {
      console.log('got error', e, e.response._data)
      if (e.response && e.response._data) {
        const data = e.response._data
        if (data.data && data.data.minted_by === form.address.toLowerCase() && 
          (data.data.status === 'queued' || data.data.status === 'registering')) {
          isLoading.value = true
          getLoading('It takes about 3 mins')
          startCheck()
        } else if (data.data && data.data.minted_by === form.address.toLowerCase() && 
          (data.data.status === 'registered')) {
          isLoading.value = false
          isDone.value = true
          emits('on-claimed', id)
          loadingService.close()
        } else {
          ElMessage.error({
            message: data.msg
          })
          isLoading.value = false
          loadingService.close()
        }
      } else {
        ElMessage.error({
          message: e.message
        })
        isLoading.value = false
        loadingService.close()
      }
    }
    // isLoading.value = true
    // getLoading('It takes about 3 mins')
  } catch (e) {
    console.log(e)
    
  }
}
</script>

<script>
export default {
  inheritAttrs: false
}
</script>


<style lang="scss">
.dialog-claim {
  min-height: 450px;
  
  &.el-dialog {
    max-width: 485px;
  }
  
  &__form {
    padding-top: 20px;
  }
  
  &__form-footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 40px;
    
    .el-button {
      width: 120px;
    }
  }

  &__tip {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 12px;
    color: var(--text-color-muted);

    &:hover {
      color: var(--color-primary);
    }
  }
  
  &__result {
    text-align: center;
  }
  
  &__result-visual {
    width: 200px;
  }
  
  &__result-text {
    font-size: 20px;
    font-weight: 500;
  }
  
  &__result-button {
    margin-top: 20px;
  }
}

@media screen and (max-width: #{$tablet-width - 1px}) {
  .dialog-claim {
    min-height: 415px;
  }
}
</style>