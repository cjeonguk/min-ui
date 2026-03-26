import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-DFR3fcOC.js";import{u as n}from"./FormField-DO-1b-Rb.js";import{t as r}from"./molecules-DTLvfuBW.js";var i,a,o,s,c,l,u,d;e((()=>{r(),i=t(),a={title:`Molecules/ChatRoomItem`,component:n,tags:[`autodocs`],parameters:{layout:`padded`}},o={args:{name:`홍길동`,preview:`안녕하세요!`,time:new Date}},s={args:{name:`김철수`,preview:`미리보기 텍스트...`,time:new Date,unreadCount:5}},c={args:{name:`이영희`,preview:`현재 접속 중입니다`,time:new Date,isOnline:!0}},l={args:{name:`박민수`,preview:`마지막 메시지 내용입니다`,time:new Date,unreadCount:12,isOnline:!0}},u={render:()=>(0,i.jsxs)(`div`,{className:`space-y-1 w-80 p-2 border border-[var(--color-border-default)] rounded-lg`,children:[(0,i.jsx)(n,{name:`홍길동`,preview:`안녕하세요!`,time:new Date,isOnline:!0}),(0,i.jsx)(n,{name:`김철수`,preview:`미리보기...`,time:new Date,unreadCount:3}),(0,i.jsx)(n,{name:`이영희`,preview:`읽지 않은 메시지`,time:new Date})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: '홍길동',
    preview: '안녕하세요!',
    time: new Date()
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: '김철수',
    preview: '미리보기 텍스트...',
    time: new Date(),
    unreadCount: 5
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: '이영희',
    preview: '현재 접속 중입니다',
    time: new Date(),
    isOnline: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: '박민수',
    preview: '마지막 메시지 내용입니다',
    time: new Date(),
    unreadCount: 12,
    isOnline: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-1 w-80 p-2 border border-[var(--color-border-default)] rounded-lg">
      <ChatRoomItem name="홍길동" preview="안녕하세요!" time={new Date()} isOnline />
      <ChatRoomItem name="김철수" preview="미리보기..." time={new Date()} unreadCount={3} />
      <ChatRoomItem name="이영희" preview="읽지 않은 메시지" time={new Date()} />
    </div>
} as unknown as Story`,...u.parameters?.docs?.source}}},d=[`Default`,`WithUnread`,`Online`,`Full`,`ChatList`]}))();export{u as ChatList,o as Default,l as Full,c as Online,s as WithUnread,d as __namedExportsOrder,a as default};