export function getYearFromDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return "Unknown";
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

export function sortedArray(array: any) {
  if (array.length < 1) return array;
  return array.sort((a: any, b: any) => {
    // Sort by 'releasestatus'
    if (a.data.releasedstatus > b.data.releasedstatus) {
      return -1; // For ascending order
    }
    if (a.data.releasedstatus < b.data.releasedstatus) {
      return 1; // For ascending order
    }
    return 0; // If they are equal
  });
}
