// Export er keyword som gjør at man kan bruke functionen i en annen fil

export function sum(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new Error("Non numeric input");
}
