import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-DFR3fcOC.js";import{o as n}from"./FormField-DO-1b-Rb.js";import{t as r}from"./molecules-DTLvfuBW.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),a={title:`Molecules/CourseChip`,component:n,tags:[`autodocs`],parameters:{layout:`padded`}},o={args:{name:`자료구조`,time:`화 3-4`,location:`공학관 301`}},s={args:{name:`알고리즘`,time:`수 1-2`,location:`공학관 201`,onRemove:()=>console.log(`remove clicked`)}},c={args:{name:`운영체제`}},l={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,i.jsx)(n,{name:`자료구조`,time:`화 3-4`,location:`공학관 301`}),(0,i.jsx)(n,{name:`알고리즘`,time:`수 1-2`,location:`공학관 201`}),(0,i.jsx)(n,{name:`운영체제`,time:`목 5-6`,location:`자연대 101`})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: '자료구조',
    time: '화 3-4',
    location: '공학관 301'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: '알고리즘',
    time: '수 1-2',
    location: '공학관 201',
    onRemove: () => console.log('remove clicked')
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: '운영체제'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <CourseChip name="자료구조" time="화 3-4" location="공학관 301" />
      <CourseChip name="알고리즘" time="수 1-2" location="공학관 201" />
      <CourseChip name="운영체제" time="목 5-6" location="자연대 101" />
    </div>
} as unknown as Story`,...l.parameters?.docs?.source}}},u=[`Default`,`WithRemove`,`NoTime`,`CourseList`]}))();export{l as CourseList,o as Default,c as NoTime,s as WithRemove,u as __namedExportsOrder,a as default};