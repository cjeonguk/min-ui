import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
} from '../components/cross-cutting';
import { Button } from '../components/atoms';

const meta = {
  title: 'Cross-cutting/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Modal defaultOpen>
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
  ),
};

export const WithForm: Story = {
  render: () => (
    <Modal defaultOpen>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Contact Form</ModalTitle>
          <ModalDescription>Please fill out the form below.</ModalDescription>
        </ModalHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full rounded-md border border-[var(--color-border-default)] px-3 py-2"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-[var(--color-border-default)] px-3 py-2"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <ModalFooter>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
};
