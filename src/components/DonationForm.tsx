import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, DollarSign } from "lucide-react";

const donationAmounts = [
  { amount: 25, impact: "Provides hygiene supplies for one child for 3 months" },
  { amount: 50, impact: "Funds toilet maintenance for one facility for 6 months" },
  { amount: 100, impact: "Builds one complete toilet facility foundation" },
  { amount: 250, impact: "Constructs a full toilet facility for a family" },
  { amount: 500, impact: "Builds a complete school restroom facility" },
  { amount: 1000, impact: "Funds a community sanitation project" },
];

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setIsCustom(true);
    setSelectedAmount(null);
  };

  const getCurrentImpact = () => {
    const amount = isCustom ? parseFloat(customAmount) : selectedAmount;
    if (!amount || amount <= 0) return null;

    if (amount >= 1000) return "Funds a community sanitation project";
    if (amount >= 500) return "Builds a complete school restroom facility";
    if (amount >= 250) return "Constructs a full toilet facility for a family";
    if (amount >= 100) return "Builds one complete toilet facility foundation";
    if (amount >= 50) return "Funds toilet maintenance for one facility for 6 months";
    if (amount >= 25) return "Provides hygiene supplies for one child for 3 months";
    return "Every dollar makes a difference in someone's life";
  };

  return (
    <section id="donate" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Make a Difference Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your donation directly funds the construction of safe, dignified sanitation facilities. 
            Choose an amount below to see the immediate impact of your generosity.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-[var(--shadow-card)]">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary fill-current" />
                    Choose Your Impact
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {donationAmounts.map(({ amount, impact }) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`p-4 rounded-lg border-2 text-left transition-all hover:shadow-md ${
                          selectedAmount === amount && !isCustom
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="text-xl font-bold text-primary">${amount}</div>
                        <div className="text-sm text-muted-foreground mt-1">{impact}</div>
                      </button>
                    ))}
                  </div>

                  <div>
                    <Label htmlFor="custom-amount" className="text-sm font-medium">
                      Custom Amount
                    </Label>
                    <div className="relative mt-2">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => handleCustomAmount(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-accent/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4">Your Impact</h4>
                  
                  {getCurrentImpact() && (
                    <div className="bg-background rounded-lg p-4 mb-6 border border-primary/20">
                      <div className="text-2xl font-bold text-primary mb-2">
                        ${isCustom ? customAmount || "0" : selectedAmount || "0"}
                      </div>
                      <div className="text-sm text-foreground">
                        {getCurrentImpact()}
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 text-sm text-muted-foreground mb-6">
                    <div className="flex justify-between">
                      <span>Donation Amount:</span>
                      <span className="font-medium">${isCustom ? customAmount || "0" : selectedAmount || "0"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Processing Fee:</span>
                      <span className="font-medium">$0</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold text-foreground">
                      <span>Total:</span>
                      <span>${isCustom ? customAmount || "0" : selectedAmount || "0"}</span>
                    </div>
                  </div>

                  <Button 
                    variant="donate" 
                    size="lg" 
                    className="w-full text-lg py-4 h-auto"
                    disabled={!selectedAmount && !customAmount}
                  >
                    Donate ${isCustom ? customAmount || "0" : selectedAmount || "0"}
                  </Button>

                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Your donation is secure and tax-deductible. You'll receive a receipt via email.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationForm;