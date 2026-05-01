# Game Dev Project 0

A cross-platform game built with Unity, C#, and Godot engine integration. This project demonstrates hybrid game development approaches using multiple game engines.

## Installation

### Prerequisites
- Unity 2022.3 LTS or later
- Godot 4.2 or later
- Visual Studio 2022 or Rider IDE

### Setup Instructions
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/game-dev-project-0.git
   ```

2. Open the project in Unity:
   ```
   cd game-dev-project-0
   ```

3. Install required Unity packages via Package Manager:
   - Godot Integration Package (available in Unity Asset Store)
   - C# Scripting Framework

4. Configure Godot integration:
   - Install Godot Editor
   - Set up Godot project in `Assets/GodotProject`
   - Configure build settings in Unity

## Usage

### Basic Setup
1. Open Unity project in Unity Hub
2. Navigate to `Scenes/MainScene` and press Play
3. The game will automatically detect Godot assets and load them

### Example Code
```csharp
// Example of Godot integration in Unity
using Godot;

public class GameIntegration : MonoBehaviour
{
    void Start()
    {
        // Initialize Godot scene
        GodotScene scene = new GodotScene("Scenes/Player.tscn");
        scene.Load();
    }
}
```

## License

MIT License

Copyright (c) 2024 Game Dev Project 0

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
