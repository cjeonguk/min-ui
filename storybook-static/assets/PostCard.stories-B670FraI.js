import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-DFR3fcOC.js";import{_ as n,t as r}from"./organisms-YPFTgTt5.js";var i,a,o,s,c,l,u,d;e((()=>{r(),i=t(),a={title:`Organisms/PostCard`,component:n,tags:[`autodocs`],parameters:{layout:`padded`}},o={args:{author:{id:`1`,name:`홍길동`,avatar:`https://picsum.photos/200?1`},content:`오늘 날씨가 정말 좋네요! 모두 좋은 하루 보내세요.`,createdAt:new Date,likeCount:12,commentCount:5}},s={args:{author:{id:`1`,name:`김철수`,avatar:`https://picsum.photos/200?2`},content:`강의실 풍경`,images:[{url:`https://picsum.photos/800/600`,alt:`강의실`}],createdAt:new Date,likeCount:45,commentCount:3}},c={args:{author:{id:`1`,name:`이영희`,avatar:`https://picsum.photos/200?3`},content:`MT에서 찍은 사진들!`,images:[{url:`https://picsum.photos/200?10`,alt:`사진1`},{url:`https://picsum.photos/200?11`,alt:`사진2`},{url:`https://picsum.photos/200?12`,alt:`사진3`},{url:`https://picsum.photos/200?13`,alt:`사진4`}],createdAt:new Date,likeCount:128,commentCount:24}},l={args:{author:{id:`1`,name:`박민수`},content:`좋아요를 눌러주세요!`,createdAt:new Date,likeCount:99,commentCount:10,isLiked:!0,isBookmarked:!0}},u={render:()=>(0,i.jsxs)(`div`,{className:`space-y-4 w-full max-w-lg`,children:[(0,i.jsx)(n,{author:{id:`1`,name:`홍길동`,avatar:`https://picsum.photos/200?1`},content:`첫 번째 게시물입니다.`,createdAt:new Date,likeCount:5,commentCount:2}),(0,i.jsx)(n,{author:{id:`2`,name:`김철수`,avatar:`https://picsum.photos/200?2`},content:`두 번째 게시물입니다.`,createdAt:new Date,likeCount:10,commentCount:3})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    author: {
      id: '1',
      name: '홍길동',
      avatar: 'https://picsum.photos/200?1'
    },
    content: '오늘 날씨가 정말 좋네요! 모두 좋은 하루 보내세요.',
    createdAt: new Date(),
    likeCount: 12,
    commentCount: 5
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    author: {
      id: '1',
      name: '김철수',
      avatar: 'https://picsum.photos/200?2'
    },
    content: '강의실 풍경',
    images: [{
      url: 'https://picsum.photos/800/600',
      alt: '강의실'
    }],
    createdAt: new Date(),
    likeCount: 45,
    commentCount: 3
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    author: {
      id: '1',
      name: '이영희',
      avatar: 'https://picsum.photos/200?3'
    },
    content: 'MT에서 찍은 사진들!',
    images: [{
      url: 'https://picsum.photos/200?10',
      alt: '사진1'
    }, {
      url: 'https://picsum.photos/200?11',
      alt: '사진2'
    }, {
      url: 'https://picsum.photos/200?12',
      alt: '사진3'
    }, {
      url: 'https://picsum.photos/200?13',
      alt: '사진4'
    }],
    createdAt: new Date(),
    likeCount: 128,
    commentCount: 24
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    author: {
      id: '1',
      name: '박민수'
    },
    content: '좋아요를 눌러주세요!',
    createdAt: new Date(),
    likeCount: 99,
    commentCount: 10,
    isLiked: true,
    isBookmarked: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-full max-w-lg">
      <Post author={{
      id: '1',
      name: '홍길동',
      avatar: 'https://picsum.photos/200?1'
    }} content="첫 번째 게시물입니다." createdAt={new Date()} likeCount={5} commentCount={2} />
      <Post author={{
      id: '2',
      name: '김철수',
      avatar: 'https://picsum.photos/200?2'
    }} content="두 번째 게시물입니다." createdAt={new Date()} likeCount={10} commentCount={3} />
    </div>
} as unknown as Story`,...u.parameters?.docs?.source}}},d=[`Default`,`WithImage`,`WithMultipleImages`,`Liked`,`PostList`]}))();export{o as Default,l as Liked,u as PostList,s as WithImage,c as WithMultipleImages,d as __namedExportsOrder,a as default};