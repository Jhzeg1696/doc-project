import numpy as np
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
 # Importing the necessary libraries
import cv2
import numpy
import diplib as dip

def draw(trckID):
    # dpi for the saved figure: https://stackoverflow.com/a/34769840/3129414
    dpi = 80

    # Set red pixel value for RGB image
    red = [1, 0, 0]
    img = mpimg.imread("./Site_Not_Found_Dreambot.fw.png")
    height, width, bands = img.shape

    # Update red pixel value for RGBA image
    if bands == 4:
        red = [1, 0, 0, 1]

    # Update figure size based on image size
    figsize = width / float(dpi), height / float(dpi)

    # Create a figure of the right size with one axes that takes up the full figure
    figure = plt.figure(figsize=figsize)
    axes = figure.add_axes([0, 0, 1, 1])

    # Hide spines, ticks, etc.
    axes.axis('off')
    print(type(136))
    # Draw a red dot at pixel (62,62) to (66, 66)
    for i in range(136 , 166):
        for j in range(133, 166):
            img[i][j] = red

    # Draw the image
    axes.imshow(img, interpolation='nearest')

    figure.savefig("./assets/trck_images/" + str(trckID) +  "/to_pdf/test.png", dpi=dpi, transparent=True)

def drawMarkers(id, coordinates):

    image1 = cv2.imread('./Site_Not_Found_Dreambot.fw.png')
    image2 = cv2.imread('./Site_Not_Found_Dreambot.fw.png')

    height = image1.shape[0]
    width = image1.shape[1]
    
    #cv2.line(image, (139,162), (130,150), (255,0,0), 2)
    #cv2.line(image, (0,0), (width, height), (0,0,255), 12)
    
    #image = cv2.circle(image, (136,163), 10, (255, 0, 0), 2)
    for coordinate in coordinates:
        if coordinate['canvasID'] == 1:
            cv2.circle(image1, (int(coordinate['x']), int(coordinate['y'])), 10, (0,0,255), 2)
            cv2.imwrite('./assets/trck_images/' + str(id) + '/pdf_images/' + str(coordinate['canvasID'])  + '.jpg', image1)
        if coordinate['canvasID'] == 2:
            cv2.circle(image2, (int(coordinate['x']), int(coordinate['y'])), 10, (0,0,255), 2)
            cv2.imwrite('./assets/trck_images/' + str(id) + '/pdf_images/' + str(coordinate['canvasID'])  + '.jpg', image2)
    
    #return image
    #cv2.imshow("Image", image)

    #cv2.waitKey(0)
    #cv2.destroyAllWindows()