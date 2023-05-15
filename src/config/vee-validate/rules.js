import { defineRule } from "vee-validate"; // npm install vee-validate --save
import { required, email, min,max } from "@vee-validate/rules"; // npm install @vee-validate/rules

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);

defineRule("redberry_email", (value) => {
    if (!value || !value.length) {
      return true;
    }
    if (!/^[a-z][a-z0-9_.]*@redberry.ge+$/.test(value)) {
      return false;
    }
    return true;
  });