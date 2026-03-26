import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-DFR3fcOC.js";import{b as n}from"./FormField-DO-1b-Rb.js";import{t as r}from"./molecules-DTLvfuBW.js";var i,a,o,s,c,l,u,d;e((()=>{r(),i=t(),a={title:`Molecules/NotificationItem`,component:n,tags:[`autodocs`],parameters:{layout:`padded`}},o={args:{title:`홍길동님이 댓글을 달았습니다`,time:new Date}},s={args:{title:`홍길동님이 댓글을 달았습니다`,description:`게시물: 오늘의 수업이 재미있었어요!`,time:new Date}},c={args:{title:`새로운 알림`,description:`아직 읽지 않은 알림입니다`,time:new Date,isRead:!1}},l={args:{title:`읽은 알림`,description:`이미 읽은 알림입니다`,time:new Date,isRead:!0}},u={render:()=>(0,i.jsxs)(`div`,{className:`space-y-1 w-80 p-2 border border-[var(--color-border-default)] rounded-lg`,children:[(0,i.jsx)(n,{title:`홍길동님이 댓글을 달았습니다`,description:`게시물: 오늘의 수업이 재미있었어요!`,time:new Date,isRead:!1}),(0,i.jsx)(n,{title:`김철수님이 좋아요를 눌렀습니다`,time:new Date,isRead:!1}),(0,i.jsx)(n,{title:`이영희님이 팔로우했습니다`,time:new Date,isRead:!0})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: '홍길동님이 댓글을 달았습니다',
    time: new Date()
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: '홍길동님이 댓글을 달았습니다',
    description: '게시물: 오늘의 수업이 재미있었어요!',
    time: new Date()
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: '새로운 알림',
    description: '아직 읽지 않은 알림입니다',
    time: new Date(),
    isRead: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: '읽은 알림',
    description: '이미 읽은 알림입니다',
    time: new Date(),
    isRead: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-1 w-80 p-2 border border-[var(--color-border-default)] rounded-lg">
      <NotificationItem title="홍길동님이 댓글을 달았습니다" description="게시물: 오늘의 수업이 재미있었어요!" time={new Date()} isRead={false} />
      <NotificationItem title="김철수님이 좋아요를 눌렀습니다" time={new Date()} isRead={false} />
      <NotificationItem title="이영희님이 팔로우했습니다" time={new Date()} isRead={true} />
    </div>
} as unknown as Story`,...u.parameters?.docs?.source}}},d=[`Default`,`WithDescription`,`Unread`,`Read`,`NotificationList`]}))();export{o as Default,u as NotificationList,l as Read,c as Unread,s as WithDescription,d as __namedExportsOrder,a as default};