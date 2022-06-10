<template>
  <section
    class="landing-form"
    id="landing-form">
    <div
      class="section-container">
      <h2
        class="landing-section__title">
        Generate Your Own Widget
      </h2>
      
      <el-form
        class="landing-form__form"
        ref="formRef"
        label-position="top"
        :model="form"
        :rules="rules"
        :show-message="false"
        size="large">
        <div
          class="landing-form__preview">
          
        </div>
        
        <div
          class="landing-form__content">
          <el-form-item
            label="Target URI"
            prop="uri">
            <el-input
              v-model="form.uri">
            </el-input>
          </el-form-item>
          
          <el-form-item
            label="Modules"
            prop="modules">
            <el-checkbox-group 
              v-model="form.modules">
              <el-checkbox 
                class="landing-form__widget-checkbox"
                v-for="item in moduleOptions"
                :key="item.value"
                border
                :label="item.value">
                <i
                  class="landing-form__widget-checkbox-icon"
                  :class="item.icon">
                </i>
                
                <div>
                  {{ item.label }}
                </div>
                
                <div
                  class="landing-form__mode-placeholder"
                  v-if="item.value === 'comment' || item.value === 'tip'">
                  --
                </div>
                
                <div
                  v-if="item.value !== 'comment' && item.value !== 'tip'">
                  <el-popover
                    :ref="`${item.value}ModePopover`"
                    placement="bottom"
                    trigger="click"
                    :width="120">
                    <template 
                      #reference>
                      <div
                        class="landing-form__mode-select"
                        @click.stop.prevent>
                        <span>
                          {{ form[item.value] }}
                        </span>
                        
                        <i
                          class="ri-arrow-drop-down-line">
                        </i>
                      </div>
                    </template>
                    
                    <template 
                      #default>
                      <div
                        class="landing-form__mode-option"
                        :class="{
                          'active': form[item.value] === option.value
                        }"
                        v-for="option in modeOptions"
                        :key="option.value"
                        @click="selectMode(item.value, option.value)">
                        {{ option.label }}
                      </div>
                    </template>
                  </el-popover>
                </div>
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          
          <el-form-item
            label="Wallet Address"
            prop="wallet_address">
            <el-input
              v-model="form.wallet_address"
              placeholder="Enter your .bit or .eth">
            </el-input>
            
            <div
              class="landing-form__tip">
              To provide your basic information or receive tips
            </div>
          </el-form-item>
          
          <div
            class="landing-form__action-bar">
            <el-button
              class="landing-form__action-button"
              size="large">
              Reset
            </el-button>
            
            <el-button
              class="landing-form__action-button"
              size="large"
              type="primary"
              @click="submit">
              Generate
            </el-button>
          </div>
        </div>
      </el-form>
      
      <div
        class="landing-form__result">
        <embed-code
          :code="code">
        </embed-code>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ElButton, ElCheckbox, ElCheckboxGroup, ElForm, ElFormItem, ElMessage, ElInput, ElPopover, ElOption, ElSelect } from 'element-plus'

const instance = getCurrentInstance()
const route = useRoute()
const router = useRouter()

const formRef = ref(null)
const form = reactive({
  name: '',
  uri: '',
  modules: [],
  wallet_address: '',
  bio: '',
  like: 'normal',
  dislike: 'normal'
})

const rules = reactive({
  name: [{
    required: true,
    trigger: 'blur'
  }],
  uri: [{
    required: true, 
    trigger: 'blur'
  }],
  modules: [{
    type: 'array',
    required: true,
    trigger: 'change'
  }],
  wallet_address: [{
    required: true,
    trigger: 'blur'
  }]
})

const moduleOptions = [{
  icon: 'ri-chat-3-line',
  label: 'Comment',
  value: 'comment'
}, {
  icon: 'ri-thumb-up-line',
  label: 'Like',
  value: 'like'
}, {
  icon: 'ri-thumb-down-line',
  label: 'Dislike',
  value: 'dislike'
}, {
  icon: 'ri-money-dollar-circle-line',
  label: 'Tip',
  value: 'tip'
}]

const modeOptions = [{
  label: 'Normal',
  value: 'normal'
}, {
  label: 'Lite',
  value: 'lite'
}]

const likeModePopover = ref(null) 
const dislikeModePopover = ref(null) 
const tipModePopover = ref(null) 
const selectMode = (value, option) => {
  form[value] = option
  instance.refs[`${value}ModePopover`][0].hide()
}
    
   
const submit = async () => {
  try {
    await formRef.value.validate()
    
    if (route.query.id) {
      ElMessage.success({
        message: 'Updated!'
      })
    } else {
      router.push('/widgets/create-success')
    }
  } catch (e) {
  }
}

const code = 'hello world'
</script>

<style lang="scss">
.landing-form {
  padding: 160px 0 0;
  
  &__form {
    display: flex;
  }
  
  &__preview {
    width: 400px;
    margin-right: 50px;
    border-radius: var(--border-radius);
    background: var(--bg-color);
  }
  
  &__content {
    flex: 1;
  }
  
  &__form {
    .el-input {
      max-width: 400px;
    }
  }
  
  &__tip {
    width: 100%;
    font-size: 12px;
    color: var(--text-color-muted);
  }
  
  &__widget-checkbox {
    width: 120px;
    
    .is-error & {
      border-color: var(--color-danger);
    }
    
    &.el-checkbox {
      height: 104px;
      padding: 20px 0 !important;
    }
    
    &.is-checked {
      box-shadow: 0 0 4px rgba(var(--color-primary-rgb), .5);
      
      .landing-form__widget-checkbox-icon {
        color: var(--color-primary);
      }
    }
    
    .el-checkbox__input {
      display: none;
    }
    
    .el-checkbox__label {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      font-size: 12px !important;
      color: var(--text-color-secondary);
    }
    
    &-icon {
      margin-bottom: 10px;
      font-size: 20px;
      color: var(--text-color-muted);
    }
  }
  
  &__mode-placeholder {
    margin-top: 8px;
    font-size: 12px;
    color: var(--text-color-muted);
  }
  
  &__mode-select {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    color: var(--text-color-muted);
    
    i {
      position: relative;
      top: 1px;
    }
  }
  
  &__mode-option {
    padding: 0 10px;
    border-radius: 6px;
    font-size: 12px;
    line-height: 30px;
    color: var(--text-color-secondary);
    transition: all .3s ease;
    cursor: pointer;
    
    &:hover,
    &.active {
      color: var(--color-primary);
    }
    
    &.active {
      background: var(--menu-item-bg-color);
    }
  }
  
  &__action-bar {
    width: 100%;
    margin-top: 100px;
    background: linear-gradient(180deg, white, transparent);
  }
  
  &__action-button {
    width: 120px;
  }
  
  &__result {
    width: 800px;
    margin: 60px auto 0;
  }
}
</style>