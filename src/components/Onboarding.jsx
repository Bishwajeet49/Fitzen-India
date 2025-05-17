import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Import React Icons for sports (only from FA collection)
import { 
  FaRunning, 
//   FaBiking, 
//   FaDumbbell, 
  FaTrophy, 
//   FaStopwatch, 
//   FaHeartbeat, 
  FaCheck, 
//   FaFire,
//   FaFootballBall,
//   FaBasketballBall,
//   FaSwimmer,
//   FaHiking
} from 'react-icons/fa';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [isNewUser, setIsNewUser] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  
  // Unsplash image URL for runner
  const runnerImageUrl = "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&q=80&w=1200&h=1200";

  // Alternative sports images URLs
  const sportsImages = [
    "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&q=80&w=1200&h=1200", // runner
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1200&h=1200", // cycling
    "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&q=80&w=1200&h=1200", // weightlifting
    "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=1200&h=1200"  // yoga
  ];
  
  // Choose a random image for variation
  const randomImage = sportsImages[Math.floor(Math.random() * sportsImages.length)];

  useEffect(() => {
    // If mode is register, we know it's a new user
    if (mode === 'register') {
      setIsNewUser(true);
    } else {
      // For login, we'll start with mobile verification
      setIsNewUser(false);
    }
  }, [mode]);

  const handleNext = () => {
    if (isNewUser) {
      // New user flow
      if (step < 3) {
        setStep(step + 1);
      } else {
        navigate('/dashboard');
      }
    } else {
      // Existing user flow
      if (step < 2) {
        setStep(step + 1);
      } else {
        navigate('/dashboard');
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const slideVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 20
      }
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  // Fixed Floating icon animation variants
  const floatingIconVariants = {
    initial: ({ x, y }) => ({
      x: typeof x === 'string' ? x : x,
      y: typeof y === 'string' ? y : y,
      opacity: 0.1,
      scale: 0.6,
    }),
    animate: ({ x, y, delay }) => {
      // Convert string percentages to fixed values to ensure same type
      const xValue = typeof x === 'string' ? x : x;
      const yValue = typeof y === 'string' ? y : y;
      
      return {
        x: xValue,
        y: yValue,
        opacity: [0.1, 0.4, 0.2, 0.3, 0.1],
        scale: [0.6, 0.8, 0.7, 0.9, 0.6],
        transition: {
          duration: 10,
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatType: "reverse",
          delay,
        }
      };
    }
  };

  // Create array of floating icons for the background with improved visibility
  // Only using FA icons to avoid import errors
  const floatingIcons = [
    // { Icon: FaRunning, left: "10%", top: "15%", color: "rgba(240, 87, 54, 0.4)", size: 32 },
    // { Icon: FaBiking, left: "22%", top: "20%", color: "rgba(240, 87, 54, 0.45)", size: 36 },
    // { Icon: FaDumbbell, left: "20%", top: "50%", color: "rgba(240, 87, 54, 0.5)", size: 30 },
    // { Icon: FaTrophy, left: "80%", top: "65%", color: "rgba(240, 87, 54, 0.45)", size: 34 },
    // { Icon: FaHeartbeat, left: "15%", top: "80%", color: "rgba(240, 87, 54, 0.4)", size: 32 },
    // { Icon: FaStopwatch, left: "60%", top: "45%", color: "rgba(240, 87, 54, 0.5)", size: 30 },
    // { Icon: FaHiking, left: "35%", top: "30%", color: "rgba(240, 87, 54, 0.55)", size: 40 },
    // { Icon: FaFire, left: "85%", top: "10%", color: "rgba(240, 87, 54, 0.45)", size: 32 },
    // { Icon: FaFootballBall, left: "45%", top: "75%", color: "rgba(240, 87, 54, 0.5)", size: 36 },
    // { Icon: FaBasketballBall, left: "30%", top: "65%", color: "rgba(240, 87, 54, 0.45)", size: 34 },
    // { Icon: FaSwimmer, left: "65%", top: "85%", color: "rgba(240, 87, 54, 0.5)", size: 36 }
  ];



  const renderStep = () => {
    if (isNewUser) {
      // New user flow
      switch (step) {
        case 1:
          return (
            <motion.div 
              key="step1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-heading font-bold text-dark-800">Start Your Journey</motion.h2>
              <motion.p variants={itemVariants} className="text-dark-600">Enter your mobile number to begin</motion.p>
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="w-full px-4 py-3 rounded-lg border border-dark-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleNext}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors shadow-lg"
                >
                  Send OTP
                </motion.button>
              </motion.div>
            </motion.div>
          );

        case 2:
          return (
            <motion.div 
              key="step2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-heading font-bold text-dark-800">Verify Your Mobile</motion.h2>
              <motion.p variants={itemVariants} className="text-dark-600">Enter the OTP sent to your mobile</motion.p>
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="grid grid-cols-6 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((digit) => (
                    <motion.input
                      key={digit}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        transition: {
                          delay: digit * 0.05
                        }
                      }}
                      type="text"
                      maxLength={1}
                      className="w-full h-12 text-center text-xl font-bold rounded-lg border border-dark-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleNext}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors shadow-lg"
                >
                  Verify OTP
                </motion.button>
              </motion.div>
            </motion.div>
          );

        case 3:
          return (
            <motion.div 
              key="step3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-heading font-bold text-dark-800">Almost There!</motion.h2>
              <motion.p variants={itemVariants} className="text-dark-600">Create your profile to finish</motion.p>
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.input
                  variants={slideVariants}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-dark-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <motion.input
                  variants={slideVariants}
                  type="password"
                  placeholder="Create MPIN (4 digits)"
                  className="w-full px-4 py-3 rounded-lg border border-dark-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <motion.input
                  variants={slideVariants}
                  type="password"
                  placeholder="Confirm MPIN"
                  className="w-full px-4 py-3 rounded-lg border border-dark-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleNext}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors shadow-lg"
                >
                  Complete Setup
                </motion.button>
              </motion.div>
            </motion.div>
          );

        default:
          return null;
      }
    } else {
      // Existing user flow
      switch (step) {
        case 1:
          return (
            <motion.div 
              key="login1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-heading font-bold text-dark-800">Welcome Back, Champion!</motion.h2>
              <motion.p variants={itemVariants} className="text-dark-600">Enter your mobile number to continue</motion.p>
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="w-full px-4 py-3 rounded-lg border border-dark-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleNext}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors shadow-lg"
                >
                  Continue
                </motion.button>
              </motion.div>
            </motion.div>
          );

        case 2:
          return (
            <motion.div 
              key="login2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit" 
              className="space-y-6"
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-heading font-bold text-dark-800">Final Step</motion.h2>
              <motion.p variants={itemVariants} className="text-dark-600">Enter your 4-digit MPIN to login</motion.p>
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="grid grid-cols-4 gap-3 my-6">
                  {[1, 2, 3, 4].map((digit) => (
                    <motion.input
                      key={digit}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        transition: {
                          delay: digit * 0.08
                        }
                      }}
                      type="password"
                      maxLength={1}
                      className="w-full h-14 text-center text-2xl font-bold rounded-lg border border-dark-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleNext}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors shadow-lg"
                >
                  Login
                </motion.button>
              </motion.div>
            </motion.div>
          );

        default:
          return null;
      }
    }
  };

  // Render advanced step progress indicator
  const renderProgressIndicator = () => {
    const totalSteps = isNewUser ? 3 : 2;
    
    return (
      <div className="mb-12">
        <div className="flex items-center justify-center">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="flex items-center">
              {/* Circle with step number */}
              <motion.div 
                className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 z-10
                  ${index + 1 <= step ? 'border-primary bg-primary text-white' : 'border-dark-300 bg-white text-dark-500'}`}
                animate={index + 1 === step ? { scale: [1, 1.1, 1], boxShadow: ["0 0 0 0 rgba(240, 87, 54, 0)", "0 0 0 10px rgba(240, 87, 54, 0.2)", "0 0 0 0 rgba(240, 87, 54, 0)"] } : {}}
                transition={index + 1 === step ? { duration: 2, repeat: Infinity } : {}}
              >
                {index + 1 <= step ? (
                  index + 1 < step ? (
                    <FaCheck className="w-4 h-4" />
                  ) : (
                    <span className="text-sm font-bold">{index + 1}</span>
                  )
                ) : (
                  <span className="text-sm font-bold">{index + 1}</span>
                )}
                
                {/* Step name */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <motion.span 
                    className={`text-xs font-medium ${index + 1 <= step ? 'text-primary' : 'text-dark-400'}`}
                    animate={index + 1 === step ? { opacity: [0.7, 1, 0.7] } : {}}
                    transition={index + 1 === step ? { duration: 2, repeat: Infinity } : {}}
                  >
                    {isNewUser ? (
                      index === 0 ? 'Mobile' : index === 1 ? 'Verify' : 'Profile'
                    ) : (
                      index === 0 ? 'Login' : 'MPIN'
                    )}
                  </motion.span>
                </div>
              </motion.div>
              
              {/* Connecting line */}
              {index < totalSteps - 1 && (
                <div className="w-16 mx-1 relative">
                  <div className="h-0.5 bg-dark-200 absolute top-5 left-0 right-0"></div>
                  <motion.div 
                    className="h-0.5 bg-primary absolute top-5 left-0"
                    initial={{ width: index < step - 1 ? "100%" : "0%" }}
                    animate={{ width: index < step - 1 ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Sports quotes for inspiration
  const sportsQuotes = [
    "Champions keep playing until they get it right.",
    "The only way to prove you're a good sport is to lose.",
    "It's not whether you get knocked down; it's whether you get up.",
    "The difference between the impossible and the possible lies in determination."
  ];

  // Randomly select a quote
  const randomQuote = sportsQuotes[Math.floor(Math.random() * sportsQuotes.length)];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image and Quote */}
      <div className="hidden md:flex flex-col w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/70 to-secondary-600/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${randomImage})` }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-md text-center"
          >
            <h1 className="text-5xl font-heading font-bold mb-6">Fitizen</h1>
            <p className="text-2xl italic mb-8">"{randomQuote}"</p>
            <div className="w-16 h-1 bg-white mx-auto rounded-full mb-8" />
            <p className="text-xl">Join thousands of fitness enthusiasts and event organizers on India's premier sports event platform.</p>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated sports icons in background with increased visibility */}
        {floatingIcons.map((item, index) => (
          <motion.div 
            key={index}
            className="absolute pointer-events-none z-10"
            style={{
              left: item.left,
              top: item.top,
              color: item.color,
              fontSize: item.size,
            }}
            animate={{
              y: ["0%", "-15%", "0%", "-10%", "0%"],
              scale: [1, 1.1, 1, 1.05, 1],
            }}
            transition={{
              duration: 5 + index % 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              delay: index * 0.3
            }}
          >
            <item.Icon />
          </motion.div>
        ))}

        {/* Add a checkerboard test to see where icons should be */}
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 grid-rows-4 opacity-0 pointer-events-none">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="border border-dashed border-red-300 flex items-center justify-center">
              <span className="text-xs text-red-400">{i+1}</span>
            </div>
          ))}
        </div>

        <div className="max-w-md w-full p-8 z-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg relative">
          {/* Larger animated decorative icons with increased visibility */}
          <motion.div 
            className="absolute -right-4 -top-4 text-primary/40" 
            style={{ fontSize: '70px' }}
            animate={{
              rotate: [0, 10, 0, -10, 0],
              scale: [1, 1.1, 1, 1.05, 1],
            }}
            transition={{
              duration: 7,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <FaTrophy />
          </motion.div>
          
          <motion.div 
            className="absolute -left-4 -bottom-4 text-primary/40" 
            style={{ fontSize: '70px' }}
            animate={{
              x: [0, 10, 0, -10, 0],
              y: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <FaRunning />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block text-4xl font-bold text-primary">{isNewUser ? 'Register' : 'Login'}</span>
            </motion.div>
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-dark-600"
            >
              {isNewUser ? 'Create your account to get started' : 'Welcome back to Fitizen'}
            </motion.p>
          </motion.div>

          {/* Enhanced progress indicator */}
          {renderProgressIndicator()}

          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>

          {step > 1 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={handleBack}
              className="mt-6 w-full flex items-center justify-center text-dark-600 hover:text-dark-800 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to previous step
            </motion.button>
          )}

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-center text-dark-500 text-sm"
          >
            {isNewUser ? (
              <p>Already have an account? <a href="/login" className="text-primary hover:text-secondary-600 font-medium">Sign in</a></p>
            ) : (
              <p>Don't have an account? <a href="/login?mode=register" className="text-primary hover:text-secondary-600 font-medium">Register now</a></p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding; 