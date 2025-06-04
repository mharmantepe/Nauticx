"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Tokenize() {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Yacht Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Yacht Name</Label>
                  <Input id="name" placeholder="e.g. Sunseeker 88" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="type">Yacht Type</Label>
                  <Input id="type" placeholder="e.g. Motor Yacht" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g. Monaco" />
                </div>
                <Button onClick={() => setStep(2)}>Next: Technical Specs</Button>
              </div>
            </CardContent>
          </Card>
        );
      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="length">Length (ft)</Label>
                  <Input id="length" type="number" placeholder="e.g. 88" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cabins">Number of Cabins</Label>
                  <Input id="cabins" type="number" placeholder="e.g. 5" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="specs">Additional Specifications</Label>
                  <Textarea
                    id="specs"
                    placeholder="Enter detailed specifications..."
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Previous
                  </Button>
                  <Button onClick={() => setStep(3)}>Next: Documents</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Ownership & Certificates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="ownership">Ownership Documents</Label>
                  <Input id="ownership" type="file" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="certification">Certification</Label>
                  <Input id="certification" type="file" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Previous
                  </Button>
                  <Button onClick={() => setStep(4)}>Next: Investment Plan</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Investment Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="price">Token Price (USD)</Label>
                  <Input id="price" type="number" placeholder="e.g. 1000" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="supply">Total Supply</Label>
                  <Input id="supply" type="number" placeholder="e.g. 1000" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Investment Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the investment opportunity..."
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(3)}>
                    Previous
                  </Button>
                  <Button onClick={() => setStep(5)}>
                    Next: Review & Publish
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case 5:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Review & Publish</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Please review all information before publishing your yacht
                    listing.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(4)}>
                    Previous
                  </Button>
                  <Button>Publish Listing</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-2xl font-bold mb-6">List Your Yacht</h1>
        {renderStep()}
      </div>
    </main>
  );
}