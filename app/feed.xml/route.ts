import { NextResponse } from 'next/server'

export async function GET() {
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Phynamax - Suplemento para Emagrecimento</title>
    <link>https://lskinderm.com</link>
    <description>Suplemento com 6 ingredientes poderosos para emagrecimento saudável. Reduz fome, acelera metabolismo e queima gordura de forma natural.</description>
    <item>
      <g:id>phynamax-001</g:id>
      <g:title>Phynamax - Suplemento para Emagrecimento</g:title>
      <g:description>Suplemento com 6 ingredientes poderosos para emagrecimento saudável. Reduz fome, acelera metabolismo e queima gordura de forma natural. Garantia de 30 dias.</g:description>
      <g:link>https://lskinderm.com</g:link>
      <g:image_link>https://lskinderm.com/images/2-min.png</g:image_link>
      <g:brand>Phynamax</g:brand>
      <g:condition>new</g:condition>
      <g:availability>in stock</g:availability>
      <g:price>257.20 BRL</g:price>
      <g:google_product_category>Health & Beauty > Personal Care > Health Care > Health Monitors & Tests > Body Fat Analyzers</g:google_product_category>
      <g:product_type>Suplemento para Emagrecimento</g:product_type>
      <g:gtin></g:gtin>
      <g:mpn>PHY-001</g:mpn>
      <g:shipping>
        <g:country>BR</g:country>
        <g:service>Frete Grátis</g:service>
        <g:price>0.00 BRL</g:price>
      </g:shipping>
      <g:tax>
        <g:country>BR</g:country>
        <g:rate>0.00</g:rate>
        <g:tax_ship>n</g:tax_ship>
      </g:tax>
    </item>
  </channel>
</rss>`

  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
