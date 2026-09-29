export function buildAccessibleLabel(resultNum, rawTitle, actionType) {
  const normalized = (rawTitle || "Untitled").trim();
  const capped = normalized.length > 30 ? normalized.substring(0, 30) + "..." : normalized;
  return actionType === "view"
    ? `View details for evidence ${resultNum}: ${capped}`
    : `Open source for evidence ${resultNum}: ${capped}`;
}
