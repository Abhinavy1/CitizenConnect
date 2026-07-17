import { ArrowRight, PlayCircle } from "lucide-react";

import Button from "../ui/Button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">

      <Button
        size="lg"
        rightIcon={<ArrowRight size={20} />}
      >
        Get Started
      </Button>

      <Button
        size="lg"
        variant="secondary"
        leftIcon={<PlayCircle size={20} />}
      >
        Live Demo
      </Button>

    </div>
  );
}