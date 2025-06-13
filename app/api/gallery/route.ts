import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const GALLERY_DOC_ID = 'main'; // You can change this if you want multiple galleries

export async function GET() {
  try {
    const docRef = doc(db, 'galleryConfig', GALLERY_DOC_ID);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      return NextResponse.json({ error: 'Gallery config not found' }, { status: 404 });
    }
    return NextResponse.json(docSnap.data());
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const docRef = doc(db, 'galleryConfig', GALLERY_DOC_ID);
    await setDoc(docRef, data, { merge: true });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
} 