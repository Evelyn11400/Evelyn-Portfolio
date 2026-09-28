"use client";

import { useRef, useState } from "react";

const plans = [
  {
    id: "starter",
    label: "STARTER",
    title: "For one AI product",
    features: [<><b key="starter-count">1</b> AI product</>, "Basic response testing", "Compare AI versions"],
  },
  {
    id: "growth",
    label: "GROWTH",
    title: "For growing AI teams",
    features: [<><b key="growth-count">Up to 5</b> AI products</>, "Advanced response testing", "Compare AI versions", "Team review", "API access"],
  },
  {
    id: "enterprise",
    label: "ENTERPRISE",
    title: "For large companies",
    features: [<><b key="enterprise-count">Unlimited</b> AI products</>, "Custom response testing", "Compare AI versions", "Team review", "API access", "Advanced security"],
  },
] as const;

export default function TracePlanSelector() {
  const [selectedPlan, setSelectedPlan] = useState("growth");
  const planRefs = useRef<Array<HTMLElement | null>>([]);

  function selectByIndex(index: number) {
    const nextIndex = (index + plans.length) % plans.length;
    setSelectedPlan(plans[nextIndex].id);
    planRefs.current[nextIndex]?.focus();
  }

  return (
    <div className="trace-plan-grid" role="radiogroup" aria-label="Trace plan comparison">
      {plans.map((plan, index) => {
        const isSelected = selectedPlan === plan.id;

        return (
          <article
            key={plan.id}
            ref={(element) => { planRefs.current[index] = element; }}
            className={`trace-plan${isSelected ? " is-selected" : ""}`}
            role="radio"
            aria-checked={isSelected}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => setSelectedPlan(plan.id)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                event.preventDefault();
                selectByIndex(index + 1);
              } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                event.preventDefault();
                selectByIndex(index - 1);
              } else if (event.key === "Home") {
                event.preventDefault();
                selectByIndex(0);
              } else if (event.key === "End") {
                event.preventDefault();
                selectByIndex(plans.length - 1);
              } else if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedPlan(plan.id);
              }
            }}
          >
            <span>{plan.label}</span>
            <h3>{plan.title}</h3>
            <ul>
              {plan.features.map((feature, featureIndex) => <li key={featureIndex}>{feature}</li>)}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
