import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-DFR3fcOC.js";import{i as n,t as r}from"./atoms-TcRkBWH_.js";var i,a,o,s,c,l,u,d,f,p,m,h,g;e((()=>{r(),i=t(),a={title:`Atoms/Toggle`,component:n,tags:[`autodocs`],parameters:{layout:`padded`},argTypes:{variant:{control:`select`,options:[`default`,`success`,`danger`]},size:{control:`select`,options:[`sm`,`md`,`lg`]}}},o={args:{}},s={args:{defaultChecked:!0}},c={args:{checked:!0}},l={args:{variant:`success`,defaultChecked:!0}},u={args:{variant:`danger`,defaultChecked:!0}},d={args:{size:`sm`}},f={args:{size:`lg`}},p={args:{disabled:!0}},m={args:{disabled:!0,defaultChecked:!0}},h={render:()=>(0,i.jsxs)(`div`,{className:`space-y-4`,children:[(0,i.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,i.jsx)(`span`,{className:`text-sm`,children:`알림 설정`}),(0,i.jsx)(n,{defaultChecked:!0})]}),(0,i.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,i.jsx)(`span`,{className:`text-sm`,children:`이메일 알림`}),(0,i.jsx)(n,{variant:`success`,defaultChecked:!0})]}),(0,i.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,i.jsx)(`span`,{className:`text-sm`,children:`마케팅 이메일`}),(0,i.jsx)(n,{})]})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    defaultChecked: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    defaultChecked: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm">알림 설정</span>
        <Toggle defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">이메일 알림</span>
        <Toggle variant="success" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">마케팅 이메일</span>
        <Toggle />
      </div>
    </div>
} as Story`,...h.parameters?.docs?.source}}},g=[`Default`,`Checked`,`Controlled`,`Success`,`Danger`,`Small`,`Large`,`Disabled`,`DisabledChecked`,`ToggleGroup`]}))();export{s as Checked,c as Controlled,u as Danger,o as Default,p as Disabled,m as DisabledChecked,f as Large,d as Small,l as Success,h as ToggleGroup,g as __namedExportsOrder,a as default};