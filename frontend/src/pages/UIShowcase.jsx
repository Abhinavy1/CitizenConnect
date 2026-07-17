import { useState } from "react";

import {
  Badge,
  Button,
  Container,
  Input,
  PageHeader,
  Select,
  Textarea,
  Toggle,
} from "../components/ui";

function UIShowcase() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("");
  const [enabled, setEnabled] = useState(true);

  const departments = [
    {
      value: "road",
      label: "Road Department",
    },
    {
      value: "water",
      label: "Water Department",
    },
    {
      value: "electricity",
      label: "Electricity Department",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] py-20">

      <Container>

        <PageHeader
          badge="UI KIT"
          title="CitizenConnect Design System"
          description="Phase 1 Component Testing"
        />

        <div className="space-y-14">

          {/* Buttons */}

          <section className="space-y-6">

            <h2 className="text-2xl font-bold text-white">
              Buttons
            </h2>

            <div className="flex flex-wrap gap-5">

              <Button>
                Primary
              </Button>

              <Button variant="secondary">
                Secondary
              </Button>

              <Button variant="outline">
                Outline
              </Button>

              <Button variant="ghost">
                Ghost
              </Button>

              <Button variant="danger">
                Danger
              </Button>

            </div>

          </section>

          {/* Input */}

          <section className="space-y-6">

            <h2 className="text-2xl font-bold text-white">
              Input
            </h2>

            <Input
              label="Full Name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

          </section>

          {/* Textarea */}

          <section className="space-y-6">

            <h2 className="text-2xl font-bold text-white">
              Textarea
            </h2>

            <Textarea
              label="Complaint"
              placeholder="Write your complaint..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

          </section>

          {/* Select */}

          <section className="space-y-6">

            <h2 className="text-2xl font-bold text-white">
              Select
            </h2>

            <Select
              label="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              options={departments}
            />

          </section>

          {/* Toggle */}

          <section className="space-y-6">

            <h2 className="text-2xl font-bold text-white">
              Toggle
            </h2>

            <Toggle
              checked={enabled}
              onChange={setEnabled}
              label="Enable Notifications"
              description="Receive updates about your complaints."
            />

          </section>

          {/* Badges */}

          <section className="space-y-6">

            <h2 className="text-2xl font-bold text-white">
              Badges
            </h2>

            <div className="flex flex-wrap gap-4">

              <Badge variant="primary">
                Active
              </Badge>

              <Badge variant="success">
                Resolved
              </Badge>

              <Badge variant="warning">
                Pending
              </Badge>

              <Badge variant="danger">
                Rejected
              </Badge>

              <Badge variant="info">
                New
              </Badge>

              <Badge variant="purple">
                Officer
              </Badge>

            </div>

          </section>

        </div>

      </Container>

    </main>
  );
}

export default UIShowcase;