<template>
  <section
    class="landing-form"
    id="landing-form"
    data-color-theme="light">
    <div
      class="container">
      <landing-section-header
        subtitle="Easy step to make it work"
        title="Get My Widget">
      </landing-section-header>
      
      <div
        class="landing-form__content">
        <div
          class="landing-form__preview">
          <div
            class="landing-form__preview-placeholder"
            v-if="!form.modules.length">
            <img 
              src="@/assets/preview.svg" 
              alt="Preview"> 
            
            <div>
              It's Preview
            </div>
          </div>
          
          
          <iframe
            class="landing-form__preview-iframe"
            v-if="form.modules.length"
            :src="`https://thirdchat-fe-deploy.vercel.app/?show-comment-dislike=true&has-v-padding=true&has-h-padding=true&modules=${form.modules.join(',')}&color-theme=light&target_uri=https%3A%2F%2Fmirror.xyz%2Fthirdchat.eth%2F8cCUKVDKXGco4-O6JRSlX5_zZkmb7C0YwCurcIVyZ2g&rpc_url=https%3A%2F%2Flocal-dev.third.chat%2F&dark-theme-color=%23141414&width=720&display=iframe`" 
            frameborder="0">
          </iframe>
        </div>
        
        <div
          class="landing-form__right">
          <el-form
            class="landing-form__form"
            v-show="!showResult"
            ref="formRef"
            label-position="top"
            :model="form"
            :rules="rules"
            :show-message="false"
            size="large">
            <el-form-item
              label="Target URI Type"
              prop="uri_type">
              <el-select 
                v-model="form.uri_type" 
                placeholder="Select">
                <el-option
                  v-for="item in uriTypeOptions"
                  :key="item.value"
                  :label="item.value"
                  :value="item.value" />
              </el-select>
            </el-form-item>
            
            <el-form-item
              label="Target URI"
              prop="uri">
              <el-input
                v-model="form.uri">
              </el-input>
              
              <div
                class="landing-form__tip">
                I am tip
              </div>
            </el-form-item>
            
            <el-form-item
              label="Modules"
              prop="modules">
              <el-checkbox-group 
                class="landing-form__widget-group"
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
                      :offset="0"
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
              label="Theme"
              prop="theme">
              <el-radio-group 
                v-model="form.theme">
                <el-radio
                  v-for="item in themeOptions"
                  :key="item.value"
                  :label="item.value">
                  {{ item.label }}
                </el-radio>
              </el-radio-group>
              
              <div
                class="landing-form__dark-color"
                v-if="form.theme !== 'light'">
                <el-input
                  v-model="form.dark_bg_color">
                  <template 
                    #prepend>
                    Dark Bg Color #
                  </template>
                </el-input>
              </div>
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
          </el-form>
          
          <div
            class="landing-form__code"
            v-show="showResult">
            <div
              class="landing-form__code-title">
              Embed Code 
            </div>
            
            <div
              class="landing-form__code-subtitle">
              Place this code in your HTML where you want to embed the widget.
            </div>
            
            <div
              class="landing-form__code-block">
              hello world
            </div>
          </div>
          
          <action-bar
            :is-form="!showResult"
            @edit="showResult = false"
            @reset="reset"
            @submit="submit">
          </action-bar>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ElButton, ElCheckbox, ElCheckboxGroup, ElForm, ElFormItem, ElMessage, ElInput, ElPopover, ElOption, ElRadio, ElRadioGroup, ElSelect } from 'element-plus'
import ActionBar from './action-bar'

const showResult = ref(false)

// form
const formRef = ref(null)
const form = reactive({
  uri_type: '',
  uri: '',
  modules: [],
  theme: 'light',
  dark_bg_color: '16171C',
  wallet_address: '',
  like: 'normal',
  dislike: 'normal'
})

const rules = reactive({
  uri_type: [{
    required: true,
    trigger: 'change'
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
  theme: [{
    required: true,
    trigger: 'change'
  }],
  wallet_address: [{
    required: true,
    trigger: 'blur'
  }]
})

// options
const uriTypeOptions = [{
  value: 'Mirror Post'
}, {
  value: 'NFT'
}, {
  value: 'Address'
}, {
  value: 'Contract'
}]

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

const themeOptions = [{
  label: 'Light',
  value: 'light'
}, {
  label: 'Dark',
  value: 'dark'
}, {
  label: 'Auto',
  value: 'auto'
}]

const instance = getCurrentInstance()
const likeModePopover = ref(null) 
const dislikeModePopover = ref(null) 
const tipModePopover = ref(null) 
const selectMode = (value, option) => {
  form[value] = option
  instance.refs[`${value}ModePopover`][0].hide()
}

const reset = () => {
  showResult.value = false
  formRef.value.resetFields()
}
   
const submit = async () => {
  try {
    await formRef.value.validate()
    showResult.value = true
  } catch (e) {
  }
}
</script>

<style lang="scss">
.landing-form {
  padding-top: 120px;
  
  &__content {
    display: flex;
    min-height: 714px;
  }
  
  &__preview {
    width: 45%;
    max-width: 480px;
    height: 500px;
    margin-right: 40px;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    pointer-events: none;
    overflow: hidden;
  }
  
  &__preview-placeholder {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: var(--text-color-muted);
    text-transform: uppercase;
    
    img {
      width: 30%;
    }
  }
  
  &__preview-iframe {
    width: 100%;
    height: 100%;
  }
  
  &__right {
    flex: 1;
  }
  
  &__form {
    .el-input {
      max-width: 400px;
    }
  }
  
  &__tip {
    width: 100%;
    margin-top: 8px;
    font-size: 12px;
    line-height: 1.5;
    color: var(--text-color-muted);
  }
  
  &__widget-group {
    width: 100%;
  }
  
  &__widget-checkbox {
    width: 120px;
    
    .is-error & {
      border-color: var(--color-danger);
    }
    
    &.el-checkbox {
      height: 104px;
      padding: 20px 0 0 !important;
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
  
  &__mode-placeholder,
  &__mode-select {
    font-size: 12px;
    line-height: 30px;
    color: var(--text-color-muted);
    opacity: .9;
  }
  
  &__mode-select {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: opacity .3s ease;
    
    &:hover {
      opacity: 1;
    }
    
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
  
  &__dark-color {
    margin-left: 30px;
    
    .el-input {
      width: 200px;
      height: 40px;
    }
    
    .el-input-group__prepend {
      padding: 0 2px 0 15px;
      border: 1px solid var(--border-color);
      border-right: 0;
      box-shadow: none;
      background: white;
      color: var(--text-color-muted);
    }
    
    .el-input__wrapper {
      padding-left: 0;
      border: 1px solid var(--border-color);
      border-left: 0;
      box-shadow: none;
    }
  }
  
  &__code-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-color-secondary);
  }
  
  &__code-subtitle {
    margin: 5px 0 40px;
    font-size: 14px;
    color: var(--text-color-muted);
  }
  
  &__code-block {
    padding: 20px;
    border-radius: var(--border-radius);
    font-size: 14px;
    background: var(--bg-color);
    color: var(--text-color-secondary);
  }
  
  &__action-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 80px;
    background: linear-gradient(180deg, white, transparent);
  }
  
  &__action-button {
    width: 120px;
  }
  
  &__more-link {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: var(--text-color-muted);
  }
}

@media screen and (max-width: 1170px) {
  .landing-form {
    &__widget-checkbox {
      width: calc(50% - 20px);
      margin: 10px;
    }
  }
}

@media screen and (max-width: $small-desktop-width) {
  .landing-form {
    &__preview {
      margin-right: 20px;
    }
    
    &__dark-color {
      width: 100%;
      margin: 10px 0 0;
    }
    
    &__action-bar {
      flex-direction: column;
      align-items: flex-start;
    }
    
    &__more-link {
      margin-top: 20px;
    }
  }
}

@media screen and (max-width: #{$tablet-width - 1}) {
  .landing-form {
    &__preview {
      display: none;
    }
  }
}
</style>