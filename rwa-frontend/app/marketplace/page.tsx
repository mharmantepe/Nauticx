"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const yachts = [
  {
    id: 'yacht-001',
    name: 'Sunseeker 88 Yacht',
    symbol: 'SSK88',
    location: 'Monaco',
    specs: '88ft, 5 cabins, 2026 model',
    price: 1000,
    soldPercentage: 45,
    certification: 'RINA'
  }
]

export default function Marketplace() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Yacht Marketplace</h1>
        <div className="flex flex-wrap gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Asset Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="luxury-yacht">Luxury Yacht</SelectItem>
              <SelectItem value="marina-berth">Marina Berth</SelectItem>
              <SelectItem value="charter-income">Charter Income</SelectItem>
              <SelectItem value="refit-project">Refit Project</SelectItem>
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monaco">Monaco</SelectItem>
              <SelectItem value="bodrum">Bodrum</SelectItem>
              <SelectItem value="cannes">Cannes</SelectItem>
              <SelectItem value="miami">Miami</SelectItem>
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Certification" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rina">RINA</SelectItem>
              <SelectItem value="mca">MCA</SelectItem>
              <SelectItem value="ce">CE</SelectItem>
              <SelectItem value="iso">ISO</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {yachts.map((yacht) => (
          <Card key={yacht.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">{yacht.name}</CardTitle>
              <Badge variant="secondary">{yacht.certification} Certified</Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Symbol:</span>
                  <span className="font-medium">{yacht.symbol}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Location:</span>
                  <span className="font-medium">{yacht.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Specs:</span>
                  <span className="font-medium">{yacht.specs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Price per Token:</span>
                  <span className="font-medium">${yacht.price}</span>
                </div>
                <Progress value={yacht.soldPercentage} className="mt-2" />
                <p className="text-xs text-muted-foreground text-center">{yacht.soldPercentage}% Sold</p>
                <Button className="w-full" variant="secondary">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}