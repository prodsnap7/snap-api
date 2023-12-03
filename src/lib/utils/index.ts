import { Readable } from 'stream';

export function streamToBuffer(stream: Readable): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Uint8Array[] = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
    stream.on('error', reject);
  });
}

export function shortId(): string {
  // Generate a number between 0 and 999999
  const randomNumber: number = Math.floor(Math.random() * 1000000);

  // Convert to a string and pad with zeros if necessary to ensure it's always 6 digits
  const sixDigitId: string = randomNumber.toString().padStart(6, '0');

  return sixDigitId;
}
