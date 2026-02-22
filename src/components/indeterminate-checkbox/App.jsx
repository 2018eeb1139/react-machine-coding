import "./styles.css";
import data from "./data.js";
import IndeterminateCheckbox from "./IndeterminateCheckbox";
import { useState } from "react";
import { STATUS } from "./constant.js";

export default function App() {
  const [checkboxState, setCheckboxState] = useState(data);

  const computeStatus = (node) => {
    if (!node.children && !node.children.length > 0) {
      return;
    }
    let checkedCount = 0;
    let unCheckedCount = 0;
    let indeterminateCount = 0;

    node.children.map((child) => {
      if (child.status === STATUS.CHECKED) checkedCount++;
      if (child.status === STATUS.UNCHECKED) unCheckedCount++;
      if (child.status === STATUS.INDETERMINATE) indeterminateCount++;
    });
    if (checkedCount === node.children.length) {
      node.status = STATUS.CHECKED;
    } else if (unCheckedCount === node.children.length) {
      node.status = STATUS.UNCHECKED;
    } else if (checkedCount > 0 || indeterminateCount > 0) {
      node.status = STATUS.INDETERMINATE;
    }
  };

  const traverse = (targetId, node, isDescendant, ancestorStatus) => {
    if (node.id === targetId) {
      if (node.status === STATUS.CHECKED) {
        node.status = STATUS.UNCHECKED;
      } else {
        node.status = STATUS.CHECKED;
      }
    }
    if (isDescendant) {
      node.status = ancestorStatus;
    }
    if (node.children && node.children.length > 0) {
      node.children.map((child) => {
        traverse(
          targetId,
          child,
          node.id === targetId || isDescendant,
          node.status,
        );
      });
      computeStatus(node);
    }
  };

  const handleChange = (targetId) => {
    console.log(targetId);
    const cloneCheckBoxState = JSON.parse(JSON.stringify(checkboxState));
    cloneCheckBoxState.map((rootNode) => {
      traverse(targetId, rootNode);
    });
    setCheckboxState(cloneCheckBoxState);
  };
  return (
    <IndeterminateCheckbox
      checkedBoxData={checkboxState}
      handleChange={handleChange}
    />
  );
}
