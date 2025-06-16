import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const SERVICES_DOC_ID = 'main';

export async function GET() {
  try {
    // Check if Firebase is available
    if (!db) {
      return NextResponse.json({ error: 'Firebase not configured' }, { status: 503 });
    }
    
    const docRef = doc(db, 'servicesConfig', SERVICES_DOC_ID);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return NextResponse.json(docSnap.data());
    } else {
      // Return default config if no document exists
      const defaultConfig = {
        settings: {
          servicesPerPage: 6,
          showDescriptions: true,
          showIcons: true,
          enableCategories: true,
          featuredServiceId: ""
        },
        services: []
      };
      return NextResponse.json(defaultConfig);
    }
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    // Check if Firebase is available
    if (!db) {
      return NextResponse.json({ error: 'Firebase not configured' }, { status: 503 });
    }
    
    const data = await req.json();
    const docRef = doc(db, 'servicesConfig', SERVICES_DOC_ID);
    await setDoc(docRef, data, { merge: true });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
} 