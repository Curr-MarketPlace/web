import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {

return NextResponse.json("service running")
}
