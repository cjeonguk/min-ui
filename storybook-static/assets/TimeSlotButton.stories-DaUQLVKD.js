import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-DFR3fcOC.js";import{i as n}from"./FormField-DO-1b-Rb.js";import{t as r}from"./molecules-DTLvfuBW.js";var i,a,o,s,c,l,u,d;e((()=>{r(),i=t(),a={title:`Molecules/TimeSlotButton`,component:n,tags:[`autodocs`],parameters:{layout:`padded`},argTypes:{status:{control:`select`,options:[`available`,`booked`,`mine`]}}},o={args:{time:`09:00 - 10:00`}},s={args:{time:`09:00 - 10:00`,status:`available`}},c={args:{time:`10:00 - 11:00`,status:`booked`}},l={args:{time:`11:00 - 12:00`,status:`mine`}},u={render:()=>(0,i.jsxs)(`div`,{className:`space-y-2`,children:[(0,i.jsx)(n,{time:`09:00 - 10:00`,status:`available`}),(0,i.jsx)(n,{time:`10:00 - 11:00`,status:`booked`}),(0,i.jsx)(n,{time:`11:00 - 12:00`,status:`mine`}),(0,i.jsx)(n,{time:`13:00 - 14:00`,status:`available`})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    time: '09:00 - 10:00'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    time: '09:00 - 10:00',
    status: 'available'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    time: '10:00 - 11:00',
    status: 'booked'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    time: '11:00 - 12:00',
    status: 'mine'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <TimeSlotButton time="09:00 - 10:00" status="available" />
      <TimeSlotButton time="10:00 - 11:00" status="booked" />
      <TimeSlotButton time="11:00 - 12:00" status="mine" />
      <TimeSlotButton time="13:00 - 14:00" status="available" />
    </div>
} as unknown as Story`,...u.parameters?.docs?.source}}},d=[`Default`,`Available`,`Booked`,`Mine`,`TimeSlotGrid`]}))();export{s as Available,c as Booked,o as Default,l as Mine,u as TimeSlotGrid,d as __namedExportsOrder,a as default};