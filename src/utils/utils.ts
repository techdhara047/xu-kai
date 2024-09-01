export function getYearFromDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return "";
  }
  return date.getFullYear() + "";
}

export function calculateAge(birth: string): number {
  const birthDate = new Date(birth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // Check if the current date is before the birthday this year
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export function slugify(text: string): string {
  return text
    .toString() // Convert to string
    .toLowerCase() // Convert to lowercase
    .trim() // Trim leading/trailing spaces
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-"); // Replace multiple hyphens with a single hyphen
}
