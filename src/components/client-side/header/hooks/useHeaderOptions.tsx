'use client';

import { useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';

const useHeaderOptions = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    const checkSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);

      if (sessionData) {
        setOptions(['Register', 'Logout']);
      } else {
        setOptions(['Login']);
      }
    };

    checkSession();
  }, []);

  return { session, options };
};

export default useHeaderOptions;
