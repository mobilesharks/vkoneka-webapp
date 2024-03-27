# Use an official bun image as a parent image
FROM public.ecr.aws/avanti/oven/bun:1.0.29-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the current directory contents into the container
COPY . .

# Install any dependencies
RUN bun install

# Expose port 3000 to the outside world
EXPOSE 3000

# Run your app using Bun
CMD ["bun", "run", "index.tsx"]