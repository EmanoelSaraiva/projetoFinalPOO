function validateDataUser(data: any): boolean {
  const validated: boolean = true;
  if (!data.name || !data.email || !data.password || !data.username) {
    return false;
  }
  return validated;
}

export default validateDataUser;
