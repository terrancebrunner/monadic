// from link-in-bio

        <div className="mb-8 flex justify-end">
            <div className="flex items-center gap-2">
              <Label htmlFor="theme-toggle" className="cursor-pointer">
                {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Label>
              <Switch
                id="theme-toggle"
                checked={isDark}
                onCheckedChange={setIsDark}
              />
            </div>