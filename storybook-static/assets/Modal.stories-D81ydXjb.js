import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-DFR3fcOC.js";import{c as n}from"./Spinner-C8Ux-xcw.js";import{t as r}from"./atoms-TcRkBWH_.js";import{d as i,f as a,l as o,m as s,p as c,t as l,u}from"./cross-cutting--IvTPwI8.js";var d,f,p,m,h;e((()=>{l(),r(),d=t(),f={title:`Cross-cutting/Modal`,component:o,tags:[`autodocs`],parameters:{layout:`centered`}},p={render:()=>(0,d.jsx)(o,{defaultOpen:!0,children:(0,d.jsxs)(u,{children:[(0,d.jsxs)(c,{children:[(0,d.jsx)(s,{children:`Modal Title`}),(0,d.jsx)(i,{children:`This is a modal dialog. You can put any content here.`})]}),(0,d.jsxs)(a,{children:[(0,d.jsx)(n,{variant:`secondary`,children:`Cancel`}),(0,d.jsx)(n,{variant:`primary`,children:`Confirm`})]})]})})},m={render:()=>(0,d.jsx)(o,{defaultOpen:!0,children:(0,d.jsxs)(u,{children:[(0,d.jsxs)(c,{children:[(0,d.jsx)(s,{children:`Contact Form`}),(0,d.jsx)(i,{children:`Please fill out the form below.`})]}),(0,d.jsxs)(`div`,{className:`space-y-4 py-4`,children:[(0,d.jsxs)(`div`,{className:`space-y-2`,children:[(0,d.jsx)(`label`,{className:`text-sm font-medium`,children:`Name`}),(0,d.jsx)(`input`,{type:`text`,className:`w-full rounded-md border border-[var(--color-border-default)] px-3 py-2`,placeholder:`Enter your name`})]}),(0,d.jsxs)(`div`,{className:`space-y-2`,children:[(0,d.jsx)(`label`,{className:`text-sm font-medium`,children:`Email`}),(0,d.jsx)(`input`,{type:`email`,className:`w-full rounded-md border border-[var(--color-border-default)] px-3 py-2`,placeholder:`Enter your email`})]})]}),(0,d.jsxs)(a,{children:[(0,d.jsx)(n,{variant:`secondary`,children:`Cancel`}),(0,d.jsx)(n,{variant:`primary`,children:`Submit`})]})]})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Modal defaultOpen>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>
            This is a modal dialog. You can put any content here.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Modal defaultOpen>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Contact Form</ModalTitle>
          <ModalDescription>Please fill out the form below.</ModalDescription>
        </ModalHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input type="text" className="w-full rounded-md border border-[var(--color-border-default)] px-3 py-2" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input type="email" className="w-full rounded-md border border-[var(--color-border-default)] px-3 py-2" placeholder="Enter your email" />
          </div>
        </div>
        <ModalFooter>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithForm`]}))();export{p as Default,m as WithForm,h as __namedExportsOrder,f as default};