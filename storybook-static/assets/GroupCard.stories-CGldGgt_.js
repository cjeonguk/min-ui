import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-DFR3fcOC.js";import{c as n}from"./FormField-DO-1b-Rb.js";import{t as r}from"./molecules-DTLvfuBW.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),a={title:`Molecules/GroupCard`,component:n,tags:[`autodocs`],parameters:{layout:`padded`}},o={args:{name:`서울대학교 MT同年会`,description:`신입생 MT를 위한 친목 단체입니다`,memberCount:156}},s={args:{name:`자료구조 스터디`,description:`매주 금요일 저녁 자료구조 스터디`,category:`학업`,memberCount:24}},c={args:{name:`비공개 그룹`,description:`관리자 승인后才能加入`,isPrivate:!0,memberCount:8}},l={render:()=>(0,i.jsxs)(`div`,{className:`grid grid-cols-2 gap-4 w-full max-w-xl`,children:[(0,i.jsx)(n,{name:`서울대 MT同年会`,description:`신입생 MT를 위한 친목 단체`,category:`친목`,memberCount:156}),(0,i.jsx)(n,{name:`자료구조 스터디`,description:`매주 금요일 스터디`,category:`학업`,memberCount:24})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: '서울대학교 MT同年会',
    description: '신입생 MT를 위한 친목 단체입니다',
    memberCount: 156
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: '자료구조 스터디',
    description: '매주 금요일 저녁 자료구조 스터디',
    category: '학업',
    memberCount: 24
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: '비공개 그룹',
    description: '관리자 승인后才能加入',
    isPrivate: true,
    memberCount: 8
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
      <GroupCard name="서울대 MT同年会" description="신입생 MT를 위한 친목 단체" category="친목" memberCount={156} />
      <GroupCard name="자료구조 스터디" description="매주 금요일 스터디" category="학업" memberCount={24} />
    </div>
} as unknown as Story`,...l.parameters?.docs?.source}}},u=[`Default`,`WithCategory`,`Private`,`GroupList`]}))();export{o as Default,l as GroupList,c as Private,s as WithCategory,u as __namedExportsOrder,a as default};