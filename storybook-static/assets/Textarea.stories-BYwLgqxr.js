import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-DFR3fcOC.js";import{i as n}from"./Skeleton-BpXXk4Al.js";import{t as r}from"./atoms-TcRkBWH_.js";var i,a,o,s,c,l,u,d,f;e((()=>{r(),i=t(),a={title:`Atoms/Textarea`,component:n,tags:[`autodocs`],parameters:{layout:`padded`},argTypes:{variant:{control:`select`,options:[`default`,`error`]}}},o={args:{placeholder:`텍스트를 입력하세요...`}},s={args:{defaultValue:`입력된 텍스트입니다.`}},c={args:{variant:`error`,placeholder:`에러 상태의 텍스트 영역`}},l={args:{disabled:!0,defaultValue:`편집할 수 없는 텍스트`}},u={render:()=>(0,i.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,i.jsx)(`label`,{className:`text-sm font-medium text-[var(--color-text-primary)]`,children:`설명`}),(0,i.jsx)(n,{placeholder:`상세한 설명을 입력하세요...`})]})},d={render:()=>(0,i.jsxs)(`div`,{className:`space-y-4 w-96`,children:[(0,i.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,i.jsx)(`label`,{className:`text-sm font-medium text-[var(--color-text-primary)]`,children:`제목`}),(0,i.jsx)(`input`,{type:`text`,className:`w-full h-10 px-3 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]`,placeholder:`제목을 입력하세요`})]}),(0,i.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,i.jsx)(`label`,{className:`text-sm font-medium text-[var(--color-text-primary)]`,children:`내용`}),(0,i.jsx)(n,{placeholder:`게시물 내용을 입력하세요...`})]})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '텍스트를 입력하세요...'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '입력된 텍스트입니다.'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    placeholder: '에러 상태의 텍스트 영역'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: '편집할 수 없는 텍스트'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-1.5">
      <label className="text-sm font-medium text-[var(--color-text-primary)]">
        설명
      </label>
      <Textarea placeholder="상세한 설명을 입력하세요..." />
    </div>
} as Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-96">
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-[var(--color-text-primary)]">
          제목
        </label>
        <input type="text" className="w-full h-10 px-3 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]" placeholder="제목을 입력하세요" />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-[var(--color-text-primary)]">
          내용
        </label>
        <Textarea placeholder="게시물 내용을 입력하세요..." />
      </div>
    </div>
} as Story`,...d.parameters?.docs?.source}}},f=[`Default`,`WithValue`,`Error`,`Disabled`,`WithLabel`,`FormExample`]}))();export{o as Default,l as Disabled,c as Error,d as FormExample,u as WithLabel,s as WithValue,f as __namedExportsOrder,a as default};