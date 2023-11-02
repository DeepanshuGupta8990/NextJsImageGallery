import React from 'react'
import type { Metadata } from "next";
import {Alert} from '@/components/bootstrap'
import SearchPage from './SearchPage';

export const metadata: Metadata = {
    title: "CSR Page",
  };

export default function page() {
  return (
    <div>
      <Alert>This page is client side rendered</Alert>
      <SearchPage/>
    </div>
  )
}
