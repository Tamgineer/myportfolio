# My name is Tamgineer, this is my portfolio

## Raytracing with non photorealism
![Raytraced image with outlines](images/materials+Outlines.png)

### abstract

I created a pathtracer which can produce artistic effects during rendering.

### introduction & background

Raytracing is a method of rendering technique in computer graphics, which simulates the physical transport of light in order to procedurally generate an image onto a screen. My project aims to demonstrate if non photorealistic techniques can be applied in a raytracing context.

### Justification of project
- No post processing step
- No texturing
- No inverse hull
- Popularity of “2D look” using 3D animation in the film industry
- Using the same shader under the hood
- Make each object be unique and have control on how they look
- Simulation of interaction of light with materials, whilst maintaining a stylistic look

### Implementation
The raytracer was written in C++17. The raytracer is an adaptation from a tutorial.

### Testing
For testing, the results would be qualitative data. I would need to demonstrate that the raytracer can produce 3 examples of non photorealism.

### Conclusion
The outlines were able to work extremely well against flat surfaces, but struggle against reflective smooth surfaces. Cel shading required context in where the light source was.

### Evaluation
Evaluation
Overall, from the many challenges I faced when tackling the project, I was satisfied with the output of the outlines that my raytracer could produce, but not with the cel shader nor the painterly rendering. Despite this, I was able to demonstrate non photorealism in my application, as well as conceptualise a few techniques that could be used despite not having the opportunity to attempt the methods.

### future work
- mesh importing (including introducing triangles)
- Optimisation
- GPU usage
- Rethinking how rays work could be utilised
- Better BVH for optimisation.
- Optimisation of rendering many planes onto scene (for painterly rendering)