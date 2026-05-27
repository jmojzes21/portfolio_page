export function appendClassName(className: string, a?: string) {
  if (a == null) {
    return className;
  }

  return className + " " + a;
}
