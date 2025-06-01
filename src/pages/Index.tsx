import { ArrowRight, ChevronLeft, ExternalLink, Menu, Search, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChevronLeft className="h-5 w-5" />
            <span className="font-medium">OpenRouter</span>
          </div>
          
          <div className="relative max-w-md w-full mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                className="pl-9 pr-8 py-2 h-10 bg-muted/50" 
                placeholder="Search models" 
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">/</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <nav>
              <ul className="flex items-center gap-6">
                <li><a href="#" className="text-sm">Models</a></li>
                <li><a href="#" className="text-sm">Chat</a></li>
                <li><a href="#" className="text-sm">Rankings</a></li>
                <li><a href="#" className="text-sm">Docs</a></li>
              </ul>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
              <Avatar className="h-8 w-8 bg-indigo-600">
                <AvatarFallback>h</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Hero Text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">
              The Unified<br />
              Interface For LLMs
            </h1>
            <p className="text-xl mb-8">
              Better <span className="text-indigo-500">prices</span>, better <span className="text-indigo-500">uptime</span>, no subscription.
            </p>
            
            {/* Chat Input */}
            <div className="relative max-w-md">
              <Input 
                className="pr-12 py-6 pl-4" 
                placeholder="Start a message..." 
              />
              <Button 
                size="icon" 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Column - Model Cards */}
          <div className="flex flex-col gap-4 relative">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-medium">Featured Models</h2>
              <a href="#" className="text-sm text-indigo-500 flex items-center gap-1">
                View Trending <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Vertical line with dots */}
            <div className="absolute left-0 top-16 bottom-0 flex flex-col items-center">
              <div className="w-1 bg-indigo-500 h-[120px] rounded-full"></div>
              <div className="w-3 h-3 bg-indigo-500 rounded-full my-2"></div>
              <div className="w-1 bg-gray-200 h-[120px] rounded-full"></div>
              <div className="w-3 h-3 bg-gray-200 rounded-full my-2"></div>
              <div className="w-1 bg-gray-200 h-[120px] rounded-full"></div>
            </div>

            {/* Model Cards */}
            <Card className="p-4 border rounded-lg shadow-sm ml-8">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">Gemini 2.5 Pro Preview</h3>
                    <Star className="h-4 w-4 fill-indigo-500 text-indigo-500" />
                  </div>
                  <p className="text-sm text-muted-foreground">by google</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <p className="text-lg font-medium text-green-600">204.5B</p>
                  <p className="text-xs text-muted-foreground">Tokens/wk</p>
                </div>
                <div>
                  <p className="text-lg font-medium">2.2s</p>
                  <p className="text-xs text-muted-foreground">Latency</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-green-600">+27.2%</p>
                  <p className="text-xs text-muted-foreground">Weekly growth</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 border rounded-lg shadow-sm ml-8">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">GPT-4.1</h3>
                    <Star className="h-4 w-4 fill-current text-gray-400" />
                  </div>
                  <p className="text-sm text-muted-foreground">by openai</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <p className="text-lg font-medium text-green-600">41.4B</p>
                  <p className="text-xs text-muted-foreground">Tokens/wk</p>
                </div>
                <div>
                  <p className="text-lg font-medium">820ms</p>
                  <p className="text-xs text-muted-foreground">Latency</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-red-500">-9.44%</p>
                  <p className="text-xs text-muted-foreground">Weekly growth</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 border rounded-lg shadow-sm ml-8">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">Claude Sonnet 4</h3>
                    <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">New</span>
                  </div>
                  <p className="text-sm text-muted-foreground">by anthropic</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <p className="text-lg font-medium text-green-600">232.2B</p>
                  <p className="text-xs text-muted-foreground">Tokens/wk</p>
                </div>
                <div>
                  <p className="text-lg font-medium">1.9s</p>
                  <p className="text-xs text-muted-foreground">Latency</p>
                </div>
                <div>
                  <p className="text-lg font-medium">--</p>
                  <p className="text-xs text-muted-foreground">Weekly growth</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-8 mt-24 text-center">
          <div>
            <h3 className="text-4xl font-bold text-indigo-500">7.9T</h3>
            <p className="text-sm text-muted-foreground mt-2">Monthly Tokens</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">2M</h3>
            <p className="text-sm text-muted-foreground mt-2">Global Users</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">50+</h3>
            <p className="text-sm text-muted-foreground mt-2">Active Providers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-500">300+</h3>
            <p className="text-sm text-muted-foreground mt-2">Models</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;