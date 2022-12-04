import pandas as pd
import numpy as np
import os
from matplotlib import pyplot

duongDan = os.getcwd() + '\data\ex2data2.txt'
tenCot = ['Test 1', 'Test 2', 'Accepted']
duLieu = pd.read_csv(duongDan, names= tenCot)

# print (duLieu.shape)
# print (duLieu.head())
# print (duLieu.describe())
# duLieu.plot(kind = 'density', subplots = True, sharex = False)
# pyplot.show()


def doThi():
    do = duLieu[duLieu['Accepted'].isin([1])]
    truot = duLieu[duLieu['Accepted'].isin([0])]

    fig, ax = pyplot.subplots()
    ax.scatter(do['Test 1'], do['Test 2'], c='black', marker='+',label='y = 1')
    ax.scatter(truot['Test 1'],truot['Test 2'],c='yellow',marker='o',label='y = 0')
    ax.legend()
    ax.set_xlabel('Microchip Test 1')
    ax.set_ylabel('Microchip Test 2')
    pyplot.show()

#doThi()

def mapfeatures():
    degree = 7
    x1 = duLieu['Test 1']
    x2 = duLieu['Test 2']

    for i in range(0, degree):
        for j in range(0, degree-i):
            duLieu['F' + str(i) + str(j)] = np.power(x1, i) * np.power(x2, j)

    duLieu.drop('Test 1', axis=1, inplace=True)
    duLieu.drop('Test 2', axis=1, inplace=True)

mapfeatures()
#print (duLieu.head())

maTran = duLieu.values
m,n = maTran.shape
#print (duLieu[:5])  # in ra 5 dòng đâu dữ liệu
X  = maTran[:,1:n]  # lấy 28 cột cuối cùng
y = maTran[:,0:1]   # lấy cột đầu tiên
#print (X[:5])		# in ra 5 dòng đầu của X, sau khi có cột 1s
#print (y[:5])		# in ra 5 dòng đầu của y

theta = np.zeros((1, X.shape[1]))
#print (X.shape, y.shape, theta.shape)	# in ra kích cỡ của X, y, theta
learningRate = 100.0    # hệ số học alpha

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def computeCost(theta, X, y, learningRate):
    theta = np.matrix(theta)
    h_theta = sigmoid(np.dot(X,theta.T))

    first = np.multiply(-y, np.log(h_theta))
    second = np.multiply((1 - y), np.log(1 - h_theta))
    reg = (learningRate / 2 * len(X)) * np.sum(np.power(theta[:, 1:theta.shape[1]], 2))

    return np.sum(first - second) / (len(X)) +reg

print (computeCost(theta, X, y, learningRate))	# in ra chi phí ban dầu

def gradientReg(theta, X, y, learningRate):
    theta = np.matrix(theta)
    X = np.matrix(X)
    y = np.matrix(y)
    parameters = theta.shape[1]
    grad = np.zeros(parameters)

    error = sigmoid(np.dot(X,theta.T)) -y

    for i in range(parameters):
        term = np.multiply(error, X[:, i])

        if (i == 0):
            grad[i] = np.sum(term) / len(X)
        else:
            grad[i] = (np.sum(term) / len(X)) + ((learningRate / len(X)) * theta[:, i])

    return grad

print (gradientReg(theta, X, y, learningRate))

import scipy.optimize as opt
result = opt.fmin_tnc(func=computeCost, x0=theta, fprime=gradientReg, args=(X, y, learningRate))
print (result)

# from scipy.optimize import fmin_bfgs
# print (fmin_bfgs(computeCost, x0=theta, fprime = gradientReg, args=(X, y, learningRate), maxiter= 100))

theta_sauCung = result[0]
print (computeCost(theta_sauCung, X, y, learningRate))

def predict(theta, X):
    probability = sigmoid(np.dot(X,theta.T))
    return [1 if x >= 0.5 else 0 for x in probability]
predictions = predict(theta_sauCung, X)
soLanDoanDung = [1 if ((a == 1 and b == 1) or (a == 0 and b == 0)) else 0 for (a, b) in zip(predictions, y)]
print (sum(map(int, soLanDoanDung)))
doChinhXac = (sum(map(int, soLanDoanDung)) / len(soLanDoanDung)*100)
print ('Do chinh xac = {0:.2f}%'.format(doChinhXac))

# from sklearn import linear_model
# model = linear_model.LogisticRegression(penalty='l2', C=1.0)
# model.fit(X, y.ravel())
#
# print (model.score(X, y))