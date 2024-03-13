# Use an official nginx image as a parent image
FROM public.ecr.aws/nginx/nginx:stable-alpine

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the project files into the container at /usr/share/nginx/html
COPY . .

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx to serve the application
CMD ["nginx", "-g", "daemon off;"]