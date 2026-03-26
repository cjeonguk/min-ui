import{n as e}from"./chunk-zsgVPwQN.js";import{f as t}from"./Spinner-C8Ux-xcw.js";import{t as n}from"./atoms-TcRkBWH_.js";var r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{n(),r={title:`Atoms/TimeBadge`,component:t,tags:[`autodocs`],parameters:{layout:`padded`},argTypes:{size:{control:`select`,options:[`xs`,`sm`,`md`]},format:{control:`select`,options:[`relative`,`absolute`]}}},i=new Date,a=new Date(i.getTime()-60*1e3),o=new Date(i.getTime()-3600*1e3),s=new Date(i.getTime()-1440*60*1e3),c=new Date(i.getTime()-10080*60*1e3),l={args:{date:i}},u={args:{date:i,format:`relative`}},d={args:{date:i,format:`absolute`}},f={args:{date:a}},p={args:{date:o}},m={args:{date:s}},h={args:{date:c}},g={args:{date:i,size:`sm`}},_={args:{date:i,size:`md`}},v={args:{date:i,size:`xs`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    date: now
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    date: now,
    format: 'relative'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    date: now,
    format: 'absolute'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    date: oneMinuteAgo
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    date: oneHourAgo
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    date: oneDayAgo
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    date: oneWeekAgo
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    date: now,
    size: 'sm'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    date: now,
    size: 'md'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    date: now,
    size: 'xs'
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Relative`,`Absolute`,`OneMinuteAgo`,`OneHourAgo`,`OneDayAgo`,`OneWeekAgo`,`Small`,`Medium`,`ExtraSmall`]}))();export{d as Absolute,l as Default,v as ExtraSmall,_ as Medium,m as OneDayAgo,p as OneHourAgo,f as OneMinuteAgo,h as OneWeekAgo,u as Relative,g as Small,y as __namedExportsOrder,r as default};