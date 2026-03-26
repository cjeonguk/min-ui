import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-DFR3fcOC.js";import{m as n}from"./FormField-DO-1b-Rb.js";import{t as r}from"./molecules-DTLvfuBW.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),a={title:`Molecules/MessageBubble`,component:n,tags:[`autodocs`],parameters:{layout:`padded`}},o={args:{name:`홍길동`,content:`안녕하세요!`,time:new Date}},s={args:{name:`나`,content:`네, 안녕하세요!`,time:new Date,isOwn:!0}},c={args:{name:`홍길동`,image:`https://picsum.photos/200`,time:new Date}},l={render:()=>(0,i.jsxs)(`div`,{className:`space-y-4 w-80`,children:[(0,i.jsx)(n,{name:`홍길동`,content:`안녕하세요!`,time:new Date}),(0,i.jsx)(n,{name:`나`,content:`네, 안녕하세요!`,time:new Date,isOwn:!0}),(0,i.jsx)(n,{name:`홍길동`,content:`좋은 하루 되세요~`,time:new Date})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: '홍길동',
    content: '안녕하세요!',
    time: new Date()
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: '나',
    content: '네, 안녕하세요!',
    time: new Date(),
    isOwn: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: '홍길동',
    image: 'https://picsum.photos/200',
    time: new Date()
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">
      <MessageBubble name="홍길동" content="안녕하세요!" time={new Date()} />
      <MessageBubble name="나" content="네, 안녕하세요!" time={new Date()} isOwn />
      <MessageBubble name="홍길동" content="좋은 하루 되세요~" time={new Date()} />
    </div>
} as unknown as Story`,...l.parameters?.docs?.source}}},u=[`Default`,`OwnMessage`,`WithImage`,`Chat`]}))();export{l as Chat,o as Default,s as OwnMessage,c as WithImage,u as __namedExportsOrder,a as default};