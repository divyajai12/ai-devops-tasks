Description of the Changes:
The function was refactored to use a single configs object that holds all environment-specific configurations.
Instead of multiple if/else if statements, the function now simply looks up the configuration by the env key in the configs object.
If the provided env does not match any key, the function defaults to the 'development' configuration.
Benefits:
Clarity:
All environment configurations are grouped together in one place, making the code easier to read and understand.
Maintainability:
Adding, removing, or updating environment configurations is straightforward—just edit the configs object, without changing the function logic.
Reduced Repetition:
The code avoids repeating the same structure for each environment, reducing the risk of errors and making updates simpler.
Scalability:
It’s easy to add new environments or modify existing ones without increasing code complexity.
Default Handling:
The default configuration is handled in a single, clear line, improving robustness and reducing the chance of mistakes.
