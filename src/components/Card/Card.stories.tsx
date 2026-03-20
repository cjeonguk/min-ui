import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
import { Button } from "../Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    shadow: {
      control: "select",
      options: ["sm", "md", "lg", "none"],
    },
    hoverable: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    shadow: "md",
    children: (
      <>
        <CardHeader title="Card Title" subtitle="Card subtitle" />
        <CardBody>
          <p className="text-gray-600">
            This is the card body content. You can add any content here.
          </p>
        </CardBody>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    shadow: "md",
    children: (
      <>
        <CardHeader title="Card with Footer" subtitle="Subtitle text" />
        <CardBody>
          <p className="text-gray-600">
            This card has a footer with action buttons.
          </p>
        </CardBody>
        <CardFooter>
          <Button variant="ghost">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </CardFooter>
      </>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    shadow: "md",
    hoverable: true,
    children: (
      <>
        <CardHeader title="Hoverable Card" />
        <CardBody>
          <p className="text-gray-600">
            Hover over this card to see the shadow effect.
          </p>
        </CardBody>
      </>
    ),
  },
};

export const LargeShadow: Story = {
  args: {
    shadow: "lg",
    children: (
      <>
        <CardHeader title="Large Shadow" />
        <CardBody>
          <p className="text-gray-600">
            This card has a large shadow effect.
          </p>
        </CardBody>
      </>
    ),
  },
};
