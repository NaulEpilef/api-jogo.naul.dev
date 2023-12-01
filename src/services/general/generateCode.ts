import crypto from 'crypto';

const generateCodes = () => {
	const uuid = crypto.randomUUID();

  const uuidSplitted = uuid.split("-");
  return `${uuidSplitted[1]}-${uuidSplitted[2]}`;
}

const generateCodeById = (uuid: string) => {
  const uuidSplitted = uuid.split("-");
  return `${uuidSplitted[1]}-${uuidSplitted[2]}`;
}

export {
  generateCodes,
  generateCodeById,
};