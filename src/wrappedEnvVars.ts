import EnvironmentEnforcer from "environment-enforcer.macro";

interface IExample {
  MY_API_URL: string;
}

export const envVars = EnvironmentEnforcer.parse<IExample>();
