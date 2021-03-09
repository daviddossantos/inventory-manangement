import { useDocument } from '@nandorojo/swr-firestore';

export function useFetchFirebase(url: string) {
  const { data, update, error } = useDocument(url, {
    listen: true,
  });

  return { data, update, error };
}
