import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-DFR3fcOC.js";import{o as n}from"./Skeleton-BpXXk4Al.js";import{t as r}from"./atoms-TcRkBWH_.js";var i,a,o,s,c,l,u,d,f,p;e((()=>{r(),i=t(),a={title:`Atoms/Divider`,component:n,tags:[`autodocs`],parameters:{layout:`padded`},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},variant:{control:`select`,options:[`default`,`strong`,`subtle`]}}},o={args:{}},s={args:{variant:`strong`}},c={args:{variant:`subtle`}},l={render:()=>(0,i.jsxs)(`div`,{className:`flex h-24 items-center gap-4`,children:[(0,i.jsx)(`span`,{children:`Before`}),(0,i.jsx)(n,{orientation:`vertical`}),(0,i.jsx)(`span`,{children:`After`})]})},u={render:()=>(0,i.jsxs)(`div`,{className:`flex h-24 items-center gap-4`,children:[(0,i.jsx)(`span`,{children:`Before`}),(0,i.jsx)(n,{orientation:`vertical`,variant:`strong`}),(0,i.jsx)(`span`,{children:`After`})]})},d={render:()=>(0,i.jsxs)(`div`,{className:`space-y-4`,children:[(0,i.jsx)(`p`,{children:`Content above`}),(0,i.jsx)(n,{}),(0,i.jsx)(`p`,{children:`Content below`})]})},f={render:()=>(0,i.jsxs)(`div`,{className:`space-y-3`,children:[(0,i.jsx)(`div`,{className:`text-sm font-medium text-[var(--color-text-secondary)]`,children:`섹션 1`}),(0,i.jsx)(`div`,{className:`h-20 bg-[var(--color-surface-subtle)]`}),(0,i.jsx)(n,{variant:`subtle`}),(0,i.jsx)(`div`,{className:`text-sm font-medium text-[var(--color-text-secondary)]`,children:`섹션 2`}),(0,i.jsx)(`div`,{className:`h-20 bg-[var(--color-surface-subtle)]`})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'strong'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'subtle'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-24 items-center gap-4">
      <span>Before</span>
      <Divider orientation="vertical" />
      <span>After</span>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-24 items-center gap-4">
      <span>Before</span>
      <Divider orientation="vertical" variant="strong" />
      <span>After</span>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <div className="text-sm font-medium text-[var(--color-text-secondary)]">
        섹션 1
      </div>
      <div className="h-20 bg-[var(--color-surface-subtle)]" />
      <Divider variant="subtle" />
      <div className="text-sm font-medium text-[var(--color-text-secondary)]">
        섹션 2
      </div>
      <div className="h-20 bg-[var(--color-surface-subtle)]" />
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Strong`,`Subtle`,`Vertical`,`VerticalStrong`,`WithContent`,`SectionDivider`]}))();export{o as Default,f as SectionDivider,s as Strong,c as Subtle,l as Vertical,u as VerticalStrong,d as WithContent,p as __namedExportsOrder,a as default};