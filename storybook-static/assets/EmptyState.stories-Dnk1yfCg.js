import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-DFR3fcOC.js";import{n,t as r}from"./cross-cutting--IvTPwI8.js";var i,a,o,s,c,l,u,d;e((()=>{r(),i=t(),a={title:`Cross-cutting/EmptyState`,component:n,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`default`,`inbox`,`search`,`users`,`messages`,`posts`]}}},o={args:{variant:`default`}},s={args:{variant:`inbox`}},c={args:{variant:`search`,title:`검색 결과 없음`,description:`다른 검색어를 시도해보세요.`}},l={args:{variant:`posts`,title:`아직 게시물이 없습니다`,description:`첫 번째 게시물을 작성해보세요!`,action:{label:`게시물 작성`,onClick:()=>console.log(`Create post`)}}},u={args:{variant:`default`,title:`데이터 없음`,description:`새로운 데이터를 추가해보세요.`,icon:(0,i.jsx)(`div`,{className:`text-4xl`,children:`📭`})}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'inbox'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'search',
    title: '검색 결과 없음',
    description: '다른 검색어를 시도해보세요.'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'posts',
    title: '아직 게시물이 없습니다',
    description: '첫 번째 게시물을 작성해보세요!',
    action: {
      label: '게시물 작성',
      onClick: () => console.log('Create post')
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    title: '데이터 없음',
    description: '새로운 데이터를 추가해보세요.',
    icon: <div className="text-4xl">📭</div>
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Inbox`,`Search`,`Posts`,`CustomIcon`]}))();export{u as CustomIcon,o as Default,s as Inbox,l as Posts,c as Search,d as __namedExportsOrder,a as default};