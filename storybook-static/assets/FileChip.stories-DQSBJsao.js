import{n as e}from"./chunk-zsgVPwQN.js";import{o as t}from"./Spinner-C8Ux-xcw.js";import{t as n}from"./atoms-TcRkBWH_.js";var r,i,a,o,s,c,l,u,d,f,p;e((()=>{n(),r={title:`Atoms/FileChip`,component:t,tags:[`autodocs`],parameters:{layout:`padded`},argTypes:{variant:{control:`select`,options:[`default`,`selected`,`error`]},size:{control:`select`,options:[`sm`,`md`,`lg`]}}},i={args:{fileName:`document.pdf`}},a={args:{fileName:`report.pdf`,fileSize:1024*512}},o={args:{fileName:`selected-file.pdf`,variant:`selected`}},s={args:{fileName:`failed-upload.pdf`,variant:`error`}},c={args:{fileName:`removable-file.pdf`,onRemove:()=>console.log(`remove clicked`)}},l={args:{fileName:`small-file.pdf`,size:`sm`}},u={args:{fileName:`medium-file.pdf`,size:`md`}},d={args:{fileName:`large-file.pdf`,size:`lg`}},f={args:{fileName:`photo.jpg`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'document.pdf'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'report.pdf',
    fileSize: 1024 * 512
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'selected-file.pdf',
    variant: 'selected'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'failed-upload.pdf',
    variant: 'error'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'removable-file.pdf',
    onRemove: () => console.log('remove clicked')
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'small-file.pdf',
    size: 'sm'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'medium-file.pdf',
    size: 'md'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'large-file.pdf',
    size: 'lg'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'photo.jpg'
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithSize`,`Selected`,`Error`,`WithRemove`,`Small`,`Medium`,`Large`,`ImageFile`]}))();export{i as Default,s as Error,f as ImageFile,d as Large,u as Medium,o as Selected,l as Small,c as WithRemove,a as WithSize,p as __namedExportsOrder,r as default};