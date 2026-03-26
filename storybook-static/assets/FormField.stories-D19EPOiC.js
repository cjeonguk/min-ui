import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-DFR3fcOC.js";import{n}from"./FormField-DO-1b-Rb.js";import{t as r}from"./molecules-DTLvfuBW.js";var i,a,o,s,c,l,u,d;e((()=>{r(),i=t(),a={title:`Molecules/FormField`,component:n,tags:[`autodocs`],parameters:{layout:`padded`}},o={args:{label:`이메일`,inputProps:{placeholder:`이메일을 입력하세요`}}},s={args:{label:`이메일`,required:!0,inputProps:{placeholder:`필수 입력 항목`}}},c={args:{label:`이메일`,error:`유효한 이메일 주소가 아닙니다`,inputProps:{placeholder:`example@email.com`}}},l={args:{label:`비밀번호`,inputProps:{type:`password`,defaultValue:`readonly_password`,disabled:!0}}},u={render:()=>(0,i.jsxs)(`div`,{className:`space-y-4 w-80`,children:[(0,i.jsx)(n,{label:`이메일`,required:!0,inputProps:{type:`email`,placeholder:`이메일을 입력하세요`}}),(0,i.jsx)(n,{label:`비밀번호`,required:!0,inputProps:{type:`password`,placeholder:`비밀번호를 입력하세요`}}),(0,i.jsx)(`button`,{className:`w-full h-10 bg-[var(--color-action-default)] text-white rounded-lg`,children:`로그인`})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: '이메일',
    inputProps: {
      placeholder: '이메일을 입력하세요'
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: '이메일',
    required: true,
    inputProps: {
      placeholder: '필수 입력 항목'
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: '이메일',
    error: '유효한 이메일 주소가 아닙니다',
    inputProps: {
      placeholder: 'example@email.com'
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: '비밀번호',
    inputProps: {
      type: 'password',
      defaultValue: 'readonly_password',
      disabled: true
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">
      <FormField label="이메일" required inputProps={{
      type: 'email',
      placeholder: '이메일을 입력하세요'
    }} />
      <FormField label="비밀번호" required inputProps={{
      type: 'password',
      placeholder: '비밀번호를 입력하세요'
    }} />
      <button className="w-full h-10 bg-[var(--color-action-default)] text-white rounded-lg">
        로그인
      </button>
    </div>
} as Story`,...u.parameters?.docs?.source}}},d=[`Default`,`Required`,`WithError`,`Disabled`,`LoginForm`]}))();export{o as Default,l as Disabled,u as LoginForm,s as Required,c as WithError,d as __namedExportsOrder,a as default};