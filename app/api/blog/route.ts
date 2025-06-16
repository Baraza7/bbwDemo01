import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const BLOG_DOC_ID = 'main'; // Document ID for the blog config

export async function GET() {
  try {
    // Check if Firebase is available
    if (!db) {
      return NextResponse.json({ error: 'Firebase not configured' }, { status: 503 });
    }
    
    const docRef = doc(db, 'blogConfig', BLOG_DOC_ID);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      return NextResponse.json({ error: 'Blog config not found' }, { status: 404 });
    }
    return NextResponse.json(docSnap.data());
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
    const docRef = doc(db, 'blogConfig', BLOG_DOC_ID);
    await setDoc(docRef, data, { merge: true });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
} 